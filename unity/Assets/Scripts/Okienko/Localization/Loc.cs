using System;
using System.Collections.Generic;
using System.IO;
using UnityEngine;
using UnityEngine.Networking;

namespace Okienko.Localization
{
    [Serializable] class LangEntry { public string key; public string value; }
    [Serializable] class LangFile { public List<LangEntry> entries = new List<LangEntry>(); }

    /// <summary>
    /// Teksty UI z StreamingAssets/lang/{kod}.json (jak lang/pl.json dema). Treści dialogów są w danych gości
    /// (guests.json), nie tutaj; dla kolejnych języków dochodzi osobny plik guests_{kod}.json (patrz PLAN_PORTU).
    /// WebGL: StreamingAssets czytamy przez UnityWebRequest, dlatego Load() jest korutyną.
    /// </summary>
    public static class Loc
    {
        static readonly Dictionary<string, string> _t = new Dictionary<string, string>();
        public static string Language { get; private set; } = "pl";
        public static event Action Changed;

        public static System.Collections.IEnumerator Load(string lang)
        {
            string path = Path.Combine(Application.streamingAssetsPath, "lang", lang + ".json");
            string json = null;
            if (path.Contains("://") || path.StartsWith("http"))
            {
                using (var req = UnityWebRequest.Get(path))
                {
                    yield return req.SendWebRequest();
                    if (req.result == UnityWebRequest.Result.Success) json = req.downloadHandler.text;
                }
            }
            else if (File.Exists(path)) json = File.ReadAllText(path);

            if (json == null) { Debug.LogError($"[Loc] Brak pliku języka: {path}"); yield break; }
            var file = JsonUtility.FromJson<LangFile>(json);
            _t.Clear();
            foreach (var e in file.entries) _t[e.key] = e.value;
            Language = lang;
            Changed?.Invoke();
        }

        /// <summary>Tłumaczenie lub "[klucz]" gdy brakuje (widoczne w grze, nie ukrywa dziury).</summary>
        public static string T(string key) => _t.TryGetValue(key, out var v) ? v : $"[{key}]";
        public static string T(string key, params object[] args) => string.Format(T(key), args);
        public static bool Has(string key) => _t.ContainsKey(key);
    }
}
