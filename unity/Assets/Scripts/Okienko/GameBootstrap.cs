using System.Collections;
using Okienko.Audio;
using Okienko.Core;
using Okienko.Data;
using Okienko.Localization;
using Okienko.Platform;
using Okienko.Presentation;
using Okienko.Save;
using UnityEngine;

namespace Okienko
{
    /// <summary>Punkt wejścia sceny Main: ładuje język i audio, składa GameSession, spina zdarzenia z audio, zapisem i platformą.</summary>
    public class GameBootstrap : MonoBehaviour
    {
        public GameDatabase db;
        public ScreenRouter router;
        public AudioDirector audio;
        public int seed = 1;   // zostaje w save; kampania fabularna jest deterministyczna, losowość tylko kosmetyczna

        public GameSession Session { get; private set; }
        IPlatformServices _platform;

        IEnumerator Start()
        {
            yield return Loc.Load("pl");
            yield return audio.Begin();
            _platform = PlatformFactory.Create();
            Session = new GameSession(db.calendar.data, db.GuestData());
            Session.Autosave += SaveService.Write;
            Session.Sting += id => audio.Sting(id);
            Session.PhaseChanged += OnPhase;
            Session.StormStarted += _ => { };
            router.Bind(Session, db);

            var saved = SaveService.Read();
            if (saved != null) Session.Resume(saved); else Session.NewGame(seed);
        }

        void OnPhase(Phase p)
        {
            switch (p)
            {
                case Phase.Delivery: audio.MusicScene("day"); audio.Sfx("delivery_tram"); audio.SetWindow(WindowState.Closed); audio.SetDoorSealed(Session.Save.HasUpgrade("drzwi")); break;
                case Phase.Decide: audio.MusicScene("tension"); audio.SetWindow(WindowState.Open); break;
                case Phase.Evening: audio.Sfx("newspaper"); break;
                case Phase.Saturday: audio.MusicScene("sobota"); break;
                case Phase.WeekEnd: _platform.UnlockAchievement(Achievements.FirstWeek); break;
            }
        }

        void OnApplicationPause(bool paused) { if (paused && Session?.Save != null) SaveService.Write(Session.Save); }
        void OnApplicationQuit() { if (Session?.Save != null) SaveService.Write(Session.Save); _platform?.Shutdown(); }
    }
}
