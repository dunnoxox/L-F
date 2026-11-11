namespace Okienko.Platform
{
    /// <summary>ID osiągnięć. Muszą się zgadzać z API Name w Steamworks (patrz Docs/STEAM_WYMAGANIA.md).</summary>
    public static class Achievements
    {
        public const string FirstWeek = "ACH_FIRST_WEEK";       // ukończony tydzień 1 (dzień 5 + sobota)
        public const string SurvivedStorm = "ACH_STORM";        // przetrwana burza
        public const string FoundSecret = "ACH_SECRET";         // pierwszy sekret ze środka rzeczy
        public const string CaughtLie = "ACH_LIE";              // pierwsze pytanie z odpowiedzią "klamie" + wydanie odmowy
        public const string FullBasement = "ACH_UPGRADES";      // wszystkie ulepszenia biura
        public const string Finished = "ACH_ENDING";            // zakończenie 25 dnia (po E3)
    }

    public interface IPlatformServices
    {
        void UnlockAchievement(string id);
        void SetStat(string id, int value);
        void Shutdown();
    }

    /// <summary>Bez Steama (WebGL, edytor, wersje testowe): nic nie robi, loguje.</summary>
    public sealed class NullPlatform : IPlatformServices
    {
        public void UnlockAchievement(string id) { UnityEngine.Debug.Log("[Platform] osiągnięcie: " + id); }
        public void SetStat(string id, int value) { }
        public void Shutdown() { }
    }

    public static class PlatformFactory
    {
        public static IPlatformServices Create()
        {
#if STEAMWORKS_NET && !UNITY_WEBGL && !UNITY_EDITOR_OSX
            return new SteamPlatform();
#else
            return new NullPlatform();
#endif
        }
    }
}
