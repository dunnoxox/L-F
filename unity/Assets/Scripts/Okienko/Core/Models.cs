using System;
using System.Collections.Generic;

namespace Okienko.Core
{
    // DTO zgodne 1:1 z Data/guests.json, calendar.json, items.json (eksport: Tools/export_data.js).
    // Nazwy pól = nazwy kluczy JSON (JsonUtility nie ma aliasów). Bez UnityEngine.

    [Serializable] public class GuestsFile { public List<GuestData> guests = new List<GuestData>(); }

    [Serializable]
    public class GuestData
    {
        public string id;
        public int day;
        public string name;
        public string voice;            // opis głosu (dla aktora/mamrotania)
        public string itemDescription;  // pełny opis rzeczy
        public string itemName;         // krótka nazwa do UI
        public string itemSprite;       // id sprite'a rzeczy
        public string face;             // prefiks twarzy; pusty = placeholder
        public int line;                // linia tramwaju 4/6/11 (skrzynia)
        public string opening;          // pierwsza kwestia
        public InsideData inside;       // wnętrze rzeczy; image == "" = brak
        public List<SecretData> secrets = new List<SecretData>();
        public List<TurnData> turns = new List<TurnData>();
        public List<DecisionData> decisions = new List<DecisionData>();
        public bool HasInside => inside != null && !string.IsNullOrEmpty(inside.image);
    }

    [Serializable] public class InsideData { public string image; public float x; public float y; }
    [Serializable] public class SecretData { public string id; public string whatYouSee; public string whatItMeans; }
    [Serializable] public class TurnData { public List<QuestionData> questions = new List<QuestionData>(); }

    [Serializable]
    public class QuestionData
    {
        public string text;
        public string tone;      // uprzejme | rzeczowe | niewygodne
        public string requires;  // id sekretu; pusty = zawsze dostępne
        public string answer;
        public string mood;      // neutralna | mowi | emocja | klamie
    }

    [Serializable]
    public class DecisionData
    {
        public string action;    // wydaj | odmow | zatrzymaj | zadzwon
        public string reaction;
        public string gain;
        public string loss;
        public int echoAfterDays;
        public string echoForm;  // list | gosc | gazeta
        public string echoText;
    }

    [Serializable] public class DayEntry { public int day; public List<string> guests = new List<string>(); }
    [Serializable] public class UpgradeEntry { public string id; public int cost; }

    [Serializable]
    public class CalendarData
    {
        public int lastDay = 10;
        public List<int> stormDays = new List<int>();
        public List<int> lines = new List<int>();
        public List<string> fillerPool = new List<string>();
        public List<DayEntry> days = new List<DayEntry>();
        public List<UpgradeEntry> upgrades = new List<UpgradeEntry>();
        public int rentPerWeek = 150;
        public int payPerGuest = 40;
    }

    [Serializable] public class ItemEntry { public string id; public int width; public int height; public bool isFiller; }
    [Serializable] public class ItemsFile { public List<ItemEntry> items = new List<ItemEntry>(); }

    public static class Actions
    {
        public const string Give = "wydaj", Refuse = "odmow", Hold = "zatrzymaj", Call = "zadzwon";
    }
}
