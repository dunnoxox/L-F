using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using Okienko.Audio;
using Okienko.Core;
using Okienko.Data;
using UnityEditor;
using UnityEngine;

namespace Okienko.EditorTools
{
    /// <summary>
    /// Menu Okienko > Importuj dane: JSON (z Tools/export_data.js) -> assety ScriptableObject, grafiki dopinane po nazwach.
    /// Idempotentne: ponowny import aktualizuje istniejące assety (zachowuje GUID-y, więc referencje w scenach nie pękają).
    /// Układ projektu: Assets/Okienko/{Data,Art/{ppl,items,in,bg},Audio/{sfx,amb,music},Generated}
    /// </summary>
    public static class OkienkoImporter
    {
        const string Root = "Assets/Okienko";
        const string Data = Root + "/Data", Art = Root + "/Art", Gen = Root + "/Generated", AudioDir = Root + "/Audio";
        static readonly string[] Moods = { "neutralna", "mowi", "emocja", "klamie" };
        static readonly HashSet<string> ValidActions = new HashSet<string> { "wydaj", "odmow", "zatrzymaj", "zadzwon" };

        [MenuItem("Okienko/Importuj dane")]
        public static void ImportAll()
        {
            var report = new StringBuilder();
            Directory.CreateDirectory(Gen); Directory.CreateDirectory(Gen + "/Guests"); Directory.CreateDirectory(Gen + "/Items");
            var guestsFile = Read<GuestsFile>(Data + "/guests.json");
            var cal = Read<CalendarData>(Data + "/calendar.json");
            var items = Read<ItemsFile>(Data + "/items.json");
            if (guestsFile == null || cal == null || items == null) { Debug.LogError("[Import] Brak plików w " + Data); return; }

            var db = LoadOrCreate<GameDatabase>(Gen + "/GameDatabase.asset");
            var calAsset = LoadOrCreate<CalendarDefinition>(Gen + "/Calendar.asset");
            calAsset.data = cal;
            calAsset.backgrounds = new[] { "T1", "T2", "T3", "T4", "T5" }.Select(n => FindSprite("bg", n, report)).ToArray();
            EditorUtility.SetDirty(calAsset);
            db.calendar = calAsset; db.guests.Clear(); db.items.Clear();

            foreach (var g in guestsFile.guests)
            {
                var a = LoadOrCreate<GuestDefinition>($"{Gen}/Guests/Guest_{g.id}.asset");
                a.data = g;
                a.faces = string.IsNullOrEmpty(g.face) ? new Sprite[4] : Moods.Select(m => FindSprite("ppl", $"{g.face}_{m}", report)).ToArray();
                a.itemSprite = FindSprite("items", g.itemSprite, report);
                a.insideSprite = g.HasInside ? FindSprite("in", g.inside.image, report) : null;
                EditorUtility.SetDirty(a); db.guests.Add(a);
            }
            foreach (var it in items.items)
            {
                var a = LoadOrCreate<ItemDefinition>($"{Gen}/Items/Item_{it.id}.asset");
                a.id = it.id; a.isFiller = it.isFiller; a.sprite = FindSprite("items", it.id, report);
                EditorUtility.SetDirty(a); db.items.Add(a);
            }
            EditorUtility.SetDirty(db);
            AssetDatabase.SaveAssets(); AssetDatabase.Refresh();
            var problems = Validate(guestsFile.guests, cal);
            Debug.Log($"[Import] Gości: {db.guests.Count}, rzeczy: {db.items.Count}. Brakujące grafiki i problemy danych:\n{report}{string.Join("\n", problems)}");
        }

        /// <summary>Walidacja spójności danych (odpowiednik docs/tools/validate_dialogs.py). Zwraca listę problemów.</summary>
        public static List<string> Validate(IEnumerable<GuestData> guests, CalendarData cal)
        {
            var p = new List<string>();
            var ids = new HashSet<string>(guests.Select(g => g.id));
            foreach (var d in cal.days) foreach (var gid in d.guests) if (!ids.Contains(gid)) p.Add($"calendar: dzień {d.day} wskazuje nieistniejącego gościa {gid}");
            foreach (var g in guests)
            {
                if (g.turns.Count != DialogueRules.TurnsPerGuest) p.Add($"{g.id}: tur {g.turns.Count}, oczekiwano {DialogueRules.TurnsPerGuest}");
                var known = new HashSet<string>(g.secrets.Select(s => s.id));
                for (int i = 0; i < g.turns.Count; i++)
                {
                    var qs = g.turns[i].questions;
                    int always = qs.Count(q => string.IsNullOrEmpty(q.requires));
                    if (always != 3) p.Add($"{g.id} tura {i + 1}: {always} pytań bez wymagań, oczekiwano 3");
                    foreach (var q in qs.Where(q => !string.IsNullOrEmpty(q.requires)))
                        if (!known.Contains(q.requires)) p.Add($"{g.id} tura {i + 1}: pytanie wymaga nieznanego sekretu {q.requires}");
                }
                foreach (var d in g.decisions) if (!ValidActions.Contains(d.action)) p.Add($"{g.id}: nieznana akcja {d.action}");
                if (g.decisions.Count < 2) p.Add($"{g.id}: mniej niż 2 decyzje");
                if (!cal.lines.Contains(g.line)) p.Add($"{g.id}: linia {g.line} spoza kalendarza");
            }
            return p;
        }

        [MenuItem("Okienko/Importuj audio")]
        public static void ImportAudio()
        {
            var lib = LoadOrCreate<AudioLibrary>(Gen + "/AudioLibrary.asset");
            lib.sounds.Clear(); lib.stings.Clear(); lib.stems.Clear();
            foreach (var guid in AssetDatabase.FindAssets("t:AudioClip", new[] { AudioDir }))
            {
                string path = AssetDatabase.GUIDToAssetPath(guid); var clip = AssetDatabase.LoadAssetAtPath<AudioClip>(path);
                string n = Path.GetFileNameWithoutExtension(path);
                if (n.StartsWith("st_")) lib.stings.Add(new SoundEntry { id = n, clip = clip, gain = 0.9f });
                else if (n.StartsWith("amb_") || n.StartsWith("sfx_")) lib.sounds.Add(new SoundEntry { id = n, clip = clip, gain = 0.6f });
                else lib.stems.Add(new MusicStem { id = n, clip = clip }); // bed, piano, cello, tension, menu, sobota
            }
            if (lib.loops.Count == 0) // domyślny układ tła z audio.js
            {
                void L(string id, Bus b, float g) => lib.loops.Add(new AmbientLoop { clipId = id, bus = b, gain = g });
                L("amb_rain_glass", Bus.Outside, .55f); L("amb_rain_tin", Bus.Outside, .2f); L("amb_rain_heavy_far", Bus.Outside, .5f);
                L("amb_gutter_drip", Bus.Outside, .18f); L("amb_traffic_distant", Bus.Outside, .2f); L("amb_wind_gap", Bus.Outside, .1f);
                L("amb_sodium_hum", Bus.Inside, .12f); L("amb_vent", Bus.Inside, .1f); L("amb_clock_tick", Bus.Inside, .1f);
                void R(string id, Bus b, float g, float a, float c, bool pan) => lib.rare.Add(new AmbientEvent { clipId = id, bus = b, gain = g, minSec = a, maxSec = c, randomPan = pan });
                R("amb_car_pass_wet", Bus.Outside, .22f, 10, 28, true); R("amb_tram_far", Bus.Outside, .14f, 35, 80, true);
                R("amb_thunder_far", Bus.Outside, .5f, 60, 150, false); R("amb_building_creak", Bus.Inside, .2f, 22, 55, false);
                R("amb_footsteps_corridor_far", Bus.Inside, .14f, 35, 90, true);
                lib.scenes = new List<MusicScene> {
                    new MusicScene { id = "menu", stems = { "menu" }, levels = { 1f } },
                    new MusicScene { id = "day", stems = { "bed" }, levels = { 1f } },
                    new MusicScene { id = "talk", stems = { "bed", "piano" }, levels = { .8f, .7f } },
                    new MusicScene { id = "tension", stems = { "bed", "tension" }, levels = { .7f, .8f } },
                    new MusicScene { id = "sobota", stems = { "sobota" }, levels = { 1f } } };
            }
            EditorUtility.SetDirty(lib); AssetDatabase.SaveAssets();
            Debug.Log($"[Import] Audio: {lib.sounds.Count} klipów, {lib.stings.Count} stingerów, {lib.stems.Count} stemów muzyki. Brak stemów = cisza, bez błędu.");
        }

        // ---- pomocnicze ----
        static T Read<T>(string path) where T : class
        {
            var ta = AssetDatabase.LoadAssetAtPath<TextAsset>(path);
            return ta == null ? null : JsonUtility.FromJson<T>(ta.text);
        }

        static T LoadOrCreate<T>(string path) where T : ScriptableObject
        {
            var a = AssetDatabase.LoadAssetAtPath<T>(path);
            if (a != null) return a;
            a = ScriptableObject.CreateInstance<T>(); AssetDatabase.CreateAsset(a, path); return a;
        }

        static Sprite FindSprite(string folder, string name, StringBuilder report)
        {
            if (string.IsNullOrEmpty(name)) return null;
            string dir = $"{Art}/{folder}";
            if (!AssetDatabase.IsValidFolder(dir)) { report.AppendLine("brak folderu " + dir); return null; }
            foreach (var guid in AssetDatabase.FindAssets(name + " t:Sprite", new[] { dir }))
            {
                string path = AssetDatabase.GUIDToAssetPath(guid);
                if (Path.GetFileNameWithoutExtension(path) == name) return AssetDatabase.LoadAssetAtPath<Sprite>(path);
            }
            report.AppendLine($"brak grafiki: {folder}/{name}"); return null;
        }
    }
}
