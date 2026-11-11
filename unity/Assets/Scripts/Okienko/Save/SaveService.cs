using System;
using System.IO;
using Okienko.Core;
using UnityEngine;

namespace Okienko.Save
{
    /// <summary>
    /// Zapis JSON. Standalone/Steam: plik w persistentDataPath z atomowym podmienieniem (tmp -> move).
    /// WebGL: persistentDataPath jest w IndexedDB i wymaga wywołania FS.syncfs (robi to Unity po zapisie pliku,
    /// ale po zamknięciu karty bez gestu bywa gubione), więc dodatkowo trzymamy kopię w PlayerPrefs.
    /// Steam Cloud: wskazać plik save.json w Auto-Cloud (Steamworks > Cloud), bez kodu.
    /// </summary>
    public static class SaveService
    {
        const string FileName = "okienko_save.json";
        const string PrefKey = "okienko_save_json";
        static string PathMain => System.IO.Path.Combine(Application.persistentDataPath, FileName);

        public static void Write(SaveData s)
        {
            string json = JsonUtility.ToJson(s);
            try
            {
                string tmp = PathMain + ".tmp";
                File.WriteAllText(tmp, json);
                if (File.Exists(PathMain)) File.Delete(PathMain);
                File.Move(tmp, PathMain);
            }
            catch (Exception e) { Debug.LogWarning("[Save] plik: " + e.Message); }
            PlayerPrefs.SetString(PrefKey, json);
            PlayerPrefs.Save();
        }

        public static SaveData Read()
        {
            string json = null;
            try { if (File.Exists(PathMain)) json = File.ReadAllText(PathMain); } catch { }
            if (string.IsNullOrEmpty(json)) json = PlayerPrefs.GetString(PrefKey, null);
            if (string.IsNullOrEmpty(json)) return null;
            try
            {
                var s = JsonUtility.FromJson<SaveData>(json);
                return s != null && s.version == SaveData.CurrentVersion ? s : null; // starsza wersja = nowa gra (migracje dopiero po E3)
            }
            catch { return null; }
        }

        public static void Delete()
        {
            try { if (File.Exists(PathMain)) File.Delete(PathMain); } catch { }
            PlayerPrefs.DeleteKey(PrefKey);
        }
    }
}
