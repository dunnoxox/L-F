using System;
using System.Collections.Generic;

namespace Okienko.Core
{
    public enum Phase { Title, Delivery, Inspect, Window, Search, Decide, Evening, Saturday, WeekEnd }

    public sealed class InspectResult
    {
        public SecretData secret; // null = zwykła rzecz
    }

    public sealed class DecisionResult
    {
        public DecisionData decision;
        public bool lastGuestOfDay;
    }

    /// <summary>
    /// Maszyna stanów dnia. Czysty C#: żadnego MonoBehaviour, żadnego czasu, żadnego UI.
    /// Widoki subskrybują zdarzenia i wołają komendy. Dozwolone przejścia pilnuje Require().
    /// Przepływ: Title -> Delivery -> (Inspect) -> Window -> Search -> Decide -> [następny gość] -> Evening -> Saturday|Delivery...
    /// </summary>
    public sealed class GameSession
    {
        readonly CalendarData _cal;
        readonly Dictionary<string, GuestData> _guests = new Dictionary<string, GuestData>();
        public SaveData Save { get; private set; }
        public Phase Phase { get; private set; } = Phase.Title;

        public event Action<Phase> PhaseChanged;
        public event Action<SaveData> Autosave;   // wołane po bezpiecznych punktach (początek dnia, wieczór, sobota)
        public event Action<string> Sting;        // "dzien_start", "sekret", "klamstwo", "decyzja", "wydarzenie", "koniec"...
        public event Action<int> StormStarted;    // przesunięcie skrzyń 1 lub 2

        public GameSession(CalendarData cal, IEnumerable<GuestData> guests)
        {
            _cal = cal;
            foreach (var g in guests) _guests[g.id] = g;
        }

        public CalendarData Calendar => _cal;
        public GuestData CurrentGuest => CurrentGuestOrNull();
        public int GuestsToday => DayPlanner.GuestIds(_cal, Save.day).Count + 1; // + wypełniacz (zwykła rzecz bez gościa)

        void Set(Phase p) { Phase = p; PhaseChanged?.Invoke(p); }
        void Require(params Phase[] allowed)
        {
            if (Array.IndexOf(allowed, Phase) < 0)
                throw new InvalidOperationException($"Komenda niedozwolona w fazie {Phase}");
        }

        GuestData CurrentGuestOrNull()
        {
            var ids = DayPlanner.GuestIds(_cal, Save.day);
            return Save.guestIndex < ids.Count && _guests.TryGetValue(ids[Save.guestIndex], out var g) ? g : null;
        }

        // ---- start / wznowienie ----
        public void NewGame(int seed)
        {
            Save = new SaveData { seed = seed };
            StartDay();
        }

        public void Resume(SaveData save)
        {
            if (save == null || save.version != SaveData.CurrentVersion) { NewGame(save?.seed ?? 1); return; }
            Save = save;
            StartDay();
        }

        public void StartDay()
        {
            Save.guestIndex = 0; Save.inspected = false; Save.turn = 0;
            if (Save.day > _cal.lastDay) { Sting?.Invoke("koniec"); Set(Phase.WeekEnd); return; }
            int shift = DayPlanner.RollStorm(_cal, Save.seed, Save.day);
            if (shift > 0 && Save.StormShift(Save.day) == 0)
            {
                Save.storms.Add(new StormEntry { day = Save.day, shift = shift });
            }
            Autosave?.Invoke(Save);
            Set(Phase.Delivery);
            Sting?.Invoke("dzien_start");
            int s = Save.StormShift(Save.day);
            if (s > 0) { StormStarted?.Invoke(s); Sting?.Invoke("wydarzenie"); }
        }

        // ---- dostawa i zaglądanie (jedna rzecz na dzień) ----
        /// <summary>Linia (skrzynia), w której rzecz leży dziś (po ewentualnej burzy).</summary>
        public int EffectiveLine(int line) => DayPlanner.EffectiveLine(_cal, line, Save.StormShift(Save.day));

        public void Inspect()
        {
            Require(Phase.Delivery);
            if (Save.inspected) throw new InvalidOperationException("Dziś już zajrzano do jednej rzeczy.");
            Save.inspected = true;
            Set(Phase.Inspect);
        }

        /// <summary>Gracz znalazł punkt w rzeczy. Dla gościa z sekretem zapisuje wiedzę.</summary>
        public InspectResult FoundHotspot(string guestId)
        {
            Require(Phase.Inspect);
            var res = new InspectResult();
            if (_guests.TryGetValue(guestId, out var g) && g.secrets.Count > 0)
            {
                res.secret = g.secrets[0];
                if (!Save.HasSecret(res.secret.id)) Save.secrets.Add(res.secret.id);
                Sting?.Invoke("sekret");
            }
            return res;
        }

        public void OpenWindow()
        {
            Require(Phase.Delivery, Phase.Inspect);
            Save.turn = 0;
            Set(Phase.Window);
        }

        // ---- rozmowa ----
        public List<OfferedQuestion> OfferedQuestions()
        {
            Require(Phase.Window);
            var g = CurrentGuest;
            if (g == null || Save.turn >= DialogueRules.TurnsPerGuest) return new List<OfferedQuestion>();
            return DialogueRules.Offer(g, Save.turn, Save);
        }

        public QuestionData Ask(QuestionData q)
        {
            Require(Phase.Window);
            if (Save.turn >= DialogueRules.TurnsPerGuest) throw new InvalidOperationException("Rozmowa wyczerpana.");
            Save.turn++;
            if (q.mood == "klamie") Sting?.Invoke("klamstwo");
            return q;
        }

        public bool ConversationOver => Save != null && Save.turn >= DialogueRules.TurnsPerGuest;

        // ---- szukanie i decyzja ----
        public void TurnToStorage() { Require(Phase.Window); Set(Phase.Search); }

        /// <summary>Gracz wziął właściwą rzecz ze sterty.</summary>
        public void PickTarget() { Require(Phase.Search); Set(Phase.Decide); }

        public DecisionResult Decide(string action)
        {
            Require(Phase.Decide);
            var g = CurrentGuest;
            var d = g.decisions.Find(x => x.action == action) ?? throw new ArgumentException("Brak akcji " + action);
            Save.log.Add(new LogEntry { guestId = g.id, action = action, day = Save.day });
            Save.pending.Add(new PendingEcho
            {
                due = Save.day + Math.Max(1, d.echoAfterDays), item = g.itemName, action = action,
                text = d.echoText, form = d.echoForm
            });
            Save.money += _cal.payPerGuest;
            Sting?.Invoke("decyzja");
            Save.guestIndex++;
            bool last = Save.guestIndex >= DayPlanner.GuestIds(_cal, Save.day).Count;
            return new DecisionResult { decision = d, lastGuestOfDay = last };
        }

        /// <summary>Po Decide: następny gość (okno) albo wieczór.</summary>
        public void Continue(bool lastGuestOfDay)
        {
            Require(Phase.Decide);
            if (lastGuestOfDay) Evening(); else { Save.turn = 0; Set(Phase.Window); }
        }

        void Evening()
        {
            Set(Phase.Evening);
            Autosave?.Invoke(Save);
        }

        /// <summary>Poczta na ladzie: listy, które właśnie przychodzą. Oznacza je jako pokazane.</summary>
        public List<PendingEcho> CollectMail()
        {
            Require(Phase.Evening);
            var due = Save.pending.FindAll(p => p.due <= Save.day && !p.shown);
            due.ForEach(p => p.shown = true);
            return due;
        }

        public bool IsSaturdayEvening => Save.day % 5 == 0;

        public void EndEvening()
        {
            Require(Phase.Evening);
            if (IsSaturdayEvening) Saturday(); else { Save.day++; StartDay(); }
        }

        // ---- sobota: czynsz i ulepszenia ----
        void Saturday()
        {
            Save.money -= _cal.rentPerWeek;
            Save.upgradeBoughtThisSaturday = false;
            Set(Phase.Saturday);
            Sting?.Invoke("dzien_koniec");
            Autosave?.Invoke(Save);
        }

        public bool CanBuy(string upgradeId)
        {
            var u = _cal.upgrades.Find(x => x.id == upgradeId);
            return Phase == Phase.Saturday && u != null && !Save.upgradeBoughtThisSaturday
                   && !Save.HasUpgrade(upgradeId) && Save.money >= u.cost;
        }

        public bool Buy(string upgradeId)
        {
            if (!CanBuy(upgradeId)) return false;
            var u = _cal.upgrades.Find(x => x.id == upgradeId);
            Save.money -= u.cost; Save.upgrades.Add(upgradeId); Save.upgradeBoughtThisSaturday = true;
            Autosave?.Invoke(Save);
            return true;
        }

        public void NextWeek()
        {
            Require(Phase.Saturday);
            Save.day++;
            if (Save.day > _cal.lastDay) { Sting?.Invoke("koniec"); Set(Phase.WeekEnd); } else StartDay();
        }

        /// <summary>Listy, które nie zdążyły dojść do końca dema (zajawka dalszych dni).</summary>
        public List<PendingEcho> UnreadMail() => Save.pending.FindAll(p => !p.shown);
    }
}
