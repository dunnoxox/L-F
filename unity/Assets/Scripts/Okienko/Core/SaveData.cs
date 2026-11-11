using System;
using System.Collections.Generic;

namespace Okienko.Core
{
    [Serializable] public class StormEntry { public int day; public int shift; }
    [Serializable] public class LogEntry { public string guestId; public string action; public int day; }

    [Serializable]
    public class PendingEcho
    {
        public int due;
        public string item;
        public string action;
        public string text;
        public string form;
        public bool shown;
    }

    /// <summary>Cały stan zapisu. Lista zamiast Dictionary, bo JsonUtility nie serializuje słowników.</summary>
    [Serializable]
    public class SaveData
    {
        public const int CurrentVersion = 3;
        public int version = CurrentVersion;
        public int seed = 1;
        public int day = 1;
        public int guestIndex;
        public int turn;
        public bool inspected;
        public int money;
        public List<string> secrets = new List<string>();
        public List<string> upgrades = new List<string>();
        public List<StormEntry> storms = new List<StormEntry>();
        public List<LogEntry> log = new List<LogEntry>();
        public List<PendingEcho> pending = new List<PendingEcho>();
        public bool upgradeBoughtThisSaturday;

        public bool HasSecret(string id) => secrets.Contains(id);
        public bool HasUpgrade(string id) => upgrades.Contains(id);
        public int StormShift(int d) { foreach (var s in storms) if (s.day == d) return s.shift; return 0; }
    }
}
