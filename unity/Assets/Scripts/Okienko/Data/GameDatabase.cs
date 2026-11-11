using System.Collections.Generic;
using Okienko.Core;
using UnityEngine;

namespace Okienko.Data
{
    /// <summary>Dane gościa jako ScriptableObject: DTO z JSON + powiązane grafiki. Tworzone importerem (Okienko/Importuj dane).</summary>
    [CreateAssetMenu(menuName = "Okienko/Guest", fileName = "Guest_")]
    public class GuestDefinition : ScriptableObject
    {
        public GuestData data;
        [Tooltip("Kolejność: neutralna, mowi, emocja, klamie. Pusta tablica = placeholder z nazwą postaci.")]
        public Sprite[] faces = new Sprite[4];
        public Sprite itemSprite;
        public Sprite insideSprite;
        public AudioClip knock;                // puk dopasowany do charakteru (polite/insistent/impatient)
        public FootstepKind footsteps = FootstepKind.Boots;

        public Sprite Face(string mood)
        {
            int i = mood switch { "neutralna" => 0, "mowi" => 1, "emocja" => 2, "klamie" => 3, _ => 0 };
            return faces != null && i < faces.Length ? faces[i] : null;
        }
    }

    public enum FootstepKind { Boots, Heels, Sneakers }

    [CreateAssetMenu(menuName = "Okienko/Item", fileName = "Item_")]
    public class ItemDefinition : ScriptableObject
    {
        public string id;
        public Sprite sprite;
        public bool isFiller;
    }

    [CreateAssetMenu(menuName = "Okienko/Calendar", fileName = "Calendar")]
    public class CalendarDefinition : ScriptableObject
    {
        public CalendarData data;
        public Sprite[] backgrounds; // T1 okienko, T2 tytuł, T3 sterta, T4 dostawa, T5 wieczór/sobota
    }

    /// <summary>Korzeń danych gry. Jeden asset, przypięty do GameBootstrap. Docelowo ładowany przez Addressables.</summary>
    [CreateAssetMenu(menuName = "Okienko/Game Database", fileName = "GameDatabase")]
    public class GameDatabase : ScriptableObject
    {
        public CalendarDefinition calendar;
        public List<GuestDefinition> guests = new List<GuestDefinition>();
        public List<ItemDefinition> items = new List<ItemDefinition>();

        Dictionary<string, GuestDefinition> _g; Dictionary<string, ItemDefinition> _i;

        public GuestDefinition Guest(string id)
        {
            if (_g == null) { _g = new Dictionary<string, GuestDefinition>(); foreach (var g in guests) _g[g.data.id] = g; }
            return _g.TryGetValue(id, out var r) ? r : null;
        }

        public ItemDefinition Item(string id)
        {
            if (_i == null) { _i = new Dictionary<string, ItemDefinition>(); foreach (var it in items) _i[it.id] = it; }
            return _i.TryGetValue(id, out var r) ? r : null;
        }

        public IEnumerable<GuestData> GuestData() { foreach (var g in guests) yield return g.data; }
        void OnValidate() { _g = null; _i = null; }
    }
}
