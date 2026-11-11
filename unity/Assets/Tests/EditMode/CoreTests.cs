using System.Collections.Generic;
using System.IO;
using System.Linq;
using NUnit.Framework;
using Okienko.Core;
using UnityEngine;

namespace Okienko.Tests
{
    /// <summary>
    /// Testy logiki bez sceny. Dane: skopiuj Data/*.json do Assets/Okienko/Data (ścieżki niżej).
    /// STATUS: napisane bez dostępu do edytora Unity, nie uruchomione. Wzór PRNG sprawdzono osobno skryptem
    /// (ten sam algorytm na wektorach z game.js: 12/12 zgodnych). Uruchom: Window > General > Test Runner > EditMode.
    /// </summary>
    public class CoreTests
    {
        const string DataDir = "Assets/Okienko/Data/";
        [System.Serializable] class Vec { public int seed; public string key; public uint hash; public double[] first; }
        [System.Serializable] class VecFile { public List<Vec> vectors; }

        static T Load<T>(string f) => JsonUtility.FromJson<T>(File.ReadAllText(DataDir + f));

        [Test]
        public void Rng_MatchesBrowserVectors()
        {
            foreach (var v in Load<VecFile>("rng_vectors.json").vectors)
            {
                Assert.AreEqual(v.hash, SeedHash.Hash(v.seed, v.key), $"hash {v.seed}/{v.key}");
                var r = new Mulberry32(v.hash);
                foreach (var expected in v.first) Assert.AreEqual(expected, r.Next(), 1e-9, $"{v.seed}/{v.key}");
            }
        }

        [Test]
        public void Planner_IsDeterministic()
        {
            var cal = Load<CalendarData>("calendar.json");
            var a = DayPlanner.BuildCrate(cal, 7, "d1_wdowiec", "rekawiczka_skora", 4, 4, false);
            var b = DayPlanner.BuildCrate(cal, 7, "d1_wdowiec", "rekawiczka_skora", 4, 4, false);
            Assert.AreEqual(a.Select(x => x.spriteId), b.Select(x => x.spriteId));
            Assert.IsTrue(a[0].isTarget);
            Assert.AreEqual(13, a.Count);                                             // 12 + cel
            Assert.IsFalse(DayPlanner.BuildCrate(cal, 7, "d1_wdowiec", "x", 4, 6, false).Any(i => i.isTarget)); // zła skrzynia
            Assert.AreEqual(8, DayPlanner.BuildCrate(cal, 7, "d1_wdowiec", "x", 4, 4, true).Count);              // regał: 7 + cel
        }

        [Test]
        public void Storm_ShiftsLine_Cyclically()
        {
            var cal = Load<CalendarData>("calendar.json");
            Assert.AreEqual(6, DayPlanner.EffectiveLine(cal, 4, 1));
            Assert.AreEqual(4, DayPlanner.EffectiveLine(cal, 11, 1));
            Assert.AreEqual(4, DayPlanner.EffectiveLine(cal, 6, 2));
            Assert.AreEqual(11, DayPlanner.EffectiveLine(cal, 11, 0));
        }

        [Test]
        public void SecretQuestion_ReplacesSameToneOnlyWhenKnown()
        {
            var g = Load<GuestsFile>("guests.json").guests.First(x => x.id == "d1_wdowiec");
            var save = new SaveData();
            var without = DialogueRules.Offer(g, 1, save);
            Assert.AreEqual(3, without.Count); Assert.IsFalse(without.Any(o => o.fromSecret));
            save.secrets.Add("d1_prawa_na_wydaniu");
            var with = DialogueRules.Offer(g, 1, save);
            Assert.AreEqual(3, with.Count); Assert.AreEqual(1, with.Count(o => o.fromSecret));
        }

        /// <summary>Odpowiednik bota QA z dema: przechodzi wszystkie dni jedną strategią i sprawdza brak wyjątków oraz bilans.</summary>
        [TestCase("wydaj")] [TestCase("odmow")]
        public void FullPlaythrough_NoExceptions(string preferred)
        {
            var cal = Load<CalendarData>("calendar.json"); var guests = Load<GuestsFile>("guests.json").guests;
            var s = new GameSession(cal, guests); s.NewGame(1);
            int guard = 0; int served = 0;
            while (s.Phase != Phase.WeekEnd && guard++ < 2000)
            {
                switch (s.Phase)
                {
                    case Phase.Delivery: s.OpenWindow(); break;
                    case Phase.Window:
                        while (!s.ConversationOver) s.Ask(s.OfferedQuestions()[0].question);
                        s.TurnToStorage(); break;
                    case Phase.Search: s.PickTarget(); break;
                    case Phase.Decide:
                    {
                        var g = s.CurrentGuest;
                        string act = g.decisions.Any(d => d.action == preferred) ? preferred : g.decisions[0].action;
                        var r = s.Decide(act); served++; s.Continue(r.lastGuestOfDay); break;
                    }
                    case Phase.Evening: s.CollectMail(); s.EndEvening(); break;
                    case Phase.Saturday: s.NextWeek(); break;
                }
            }
            Assert.AreEqual(Phase.WeekEnd, s.Phase);
            Assert.AreEqual(cal.days.Sum(d => d.guests.Count), served);
            Assert.AreEqual(served * cal.payPerGuest - 2 * cal.rentPerWeek, s.Save.money); // 13 gości, 2 soboty, bez ulepszeń
        }

        [Test]
        public void Commands_OutOfPhase_Throw()
        {
            var s = new GameSession(Load<CalendarData>("calendar.json"), Load<GuestsFile>("guests.json").guests);
            s.NewGame(1);
            Assert.Throws<System.InvalidOperationException>(() => s.PickTarget());
            s.Inspect(); Assert.Throws<System.InvalidOperationException>(() => s.Inspect());
        }

        [Test]
        public void Save_RoundTrips()
        {
            var save = new SaveData { seed = 5, day = 3, money = 120 };
            save.secrets.Add("x"); save.storms.Add(new StormEntry { day = 3, shift = 2 });
            var back = JsonUtility.FromJson<SaveData>(JsonUtility.ToJson(save));
            Assert.AreEqual(2, back.StormShift(3)); Assert.IsTrue(back.HasSecret("x")); Assert.AreEqual(120, back.money);
        }
    }
}
