using System;
using System.Collections.Generic;
using UnityEngine;

namespace Okienko.Audio
{
    [Serializable] public class SoundEntry { public string id; public AudioClip clip; [Range(0f, 1.5f)] public float gain = 0.6f; }

    public enum Bus { Music, Outside, Inside, Sfx, Voice, Ui }

    /// <summary>Pętla tła (deszcz, bzyczenie lampy) wpięta w szynę Outside lub Inside.</summary>
    [Serializable] public class AmbientLoop { public string clipId; public Bus bus = Bus.Outside; [Range(0f, 1f)] public float gain = 0.2f; }

    /// <summary>Rzadkie zdarzenie tła (samochód, tramwaj, grzmot, skrzypnięcie) losowane co min..max sekund.</summary>
    [Serializable] public class AmbientEvent { public string clipId; public Bus bus = Bus.Outside; [Range(0f, 1f)] public float gain = 0.2f; public float minSec = 20, maxSec = 60; public bool randomPan; }

    [Serializable] public class MusicStem { public string id; public AudioClip clip; }
    [Serializable] public class MusicScene { public string id; public List<string> stems = new List<string>(); public List<float> levels = new List<float>(); }

    /// <summary>Wszystkie dźwięki w jednym assecie, wypełniane importerem po nazwach plików (sfx_*, amb_*, st_*).</summary>
    [CreateAssetMenu(menuName = "Okienko/Audio Library", fileName = "AudioLibrary")]
    public class AudioLibrary : ScriptableObject
    {
        public List<SoundEntry> sounds = new List<SoundEntry>();
        public List<AmbientLoop> loops = new List<AmbientLoop>();
        public List<AmbientEvent> rare = new List<AmbientEvent>();
        public List<MusicStem> stems = new List<MusicStem>();      // bed, piano, cello, tension, menu, sobota
        public List<SoundEntry> stings = new List<SoundEntry>();   // st_dzien_start, st_sekret, st_klamstwo...
        public List<MusicScene> scenes = new List<MusicScene>();   // menu, day, talk, tension, sobota

        Dictionary<string, SoundEntry> _map;
        public SoundEntry Find(string id)
        {
            if (_map == null) { _map = new Dictionary<string, SoundEntry>(); foreach (var s in sounds) if (s != null && !string.IsNullOrEmpty(s.id)) _map[s.id] = s; }
            return _map.TryGetValue(id, out var e) ? e : null;
        }
        void OnValidate() { _map = null; }
    }
}
