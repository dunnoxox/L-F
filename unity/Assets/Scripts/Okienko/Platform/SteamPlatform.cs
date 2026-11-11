#if STEAMWORKS_NET && !UNITY_WEBGL
using Steamworks;
using UnityEngine;

namespace Okienko.Platform
{
    /// <summary>
    /// Steamworks.NET (https://github.com/rlabrecque/Steamworks.NET, instalacja przez UPM z GitHuba; zweryfikuj aktualną wersję).
    /// Włączenie: Player Settings > Scripting Define Symbols: STEAMWORKS_NET. Do testów lokalnych potrzebny steam_appid.txt
    /// obok exe z App ID (480 = Spacewar do prób, potem własny). NIEPRZETESTOWANE: brak edytora Unity i klienta Steam w środowisku autora.
    /// </summary>
    public sealed class SteamPlatform : IPlatformServices
    {
        readonly bool _ok;
        public SteamPlatform()
        {
            try { _ok = SteamAPI.Init(); }
            catch (System.Exception e) { Debug.LogWarning("[Steam] init: " + e.Message); }
            if (_ok) SteamUserStats.RequestCurrentStats();
        }

        public void UnlockAchievement(string id)
        {
            if (!_ok) return;
            SteamUserStats.GetAchievement(id, out bool done);
            if (done) return;
            SteamUserStats.SetAchievement(id); SteamUserStats.StoreStats();
        }

        public void SetStat(string id, int value) { if (_ok) { SteamUserStats.SetStat(id, value); SteamUserStats.StoreStats(); } }
        public void Shutdown() { if (_ok) SteamAPI.Shutdown(); }
    }
}
#endif
