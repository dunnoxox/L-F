using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.Audio;

namespace Okienko.Audio
{
    public enum WindowState { Closed, Ajar, Open }

    /// <summary>
    /// Mikser Okienka w Unity. Odpowiednik audio.js. Szyny w AudioMixer (nazwy parametrów poniżej są kontraktem):
    ///   Master [MasterVol] > Music [MusicVol], Ambience [AmbVol] > (Outside [OutsideVol] z Lowpass Simple [OutsideCutoff], Inside [InsideVol]),
    ///   Sfx [SfxVol], Voice [VoiceVol] (Send -> Duck Volume na Ambience = ducking pod głosem), Ui [UiVol].
    /// Okienko otwarte/zamknięte to filtr dolnoprzepustowy na szynie Outside (deszcz nigdy nie milknie, tylko się przyciemnia).
    /// Suwaki gracza 0..1 liczone jak w demie: amplituda = v^2, czyli dB = 40*log10(v).
    /// </summary>
    public class AudioDirector : MonoBehaviour
    {
        public static AudioDirector I { get; private set; }

        [Header("Mikser i dane")]
        public AudioMixer mixer;
        public AudioLibrary library;
        [Tooltip("Mixer groups w tej samej kolejności co enum Bus: Music, Outside, Inside, Sfx, Voice, Ui")]
        public AudioMixerGroup[] groups = new AudioMixerGroup[6];
        public AudioClip[] voiceBlips; // krótkie "mamrotanie": zastępnik głosów, pitch zależy od intymności

        const string KeyPrefix = "okienko_vol_";
        static readonly string[] VolParams = { "MasterVol", "MusicVol", "AmbVol", "SfxVol", "VoiceVol", "UiVol" };
        static readonly string[] VolKeys = { "master", "music", "amb", "sfx", "voice", "ui" };

        readonly Dictionary<string, float> _vol = new Dictionary<string, float>
        { {"master", .8f}, {"music", .7f}, {"amb", .8f}, {"sfx", .8f}, {"voice", .8f}, {"ui", .8f} };
        readonly Dictionary<string, float> _lastPlayed = new Dictionary<string, float>();
        readonly Dictionary<string, AudioSource> _stemSrc = new Dictionary<string, AudioSource>();
        readonly Dictionary<string, float> _stemTarget = new Dictionary<string, float>();
        readonly List<AudioSource> _oneShotPool = new List<AudioSource>();
        WindowState _window = WindowState.Closed;
        bool _door;
        Coroutine _windowRoutine;
        System.Random _cosmetic = new System.Random(); // kosmetyczne zdarzenia: OSOBNY od seeda gry

        void Awake()
        {
            if (I != null) { Destroy(gameObject); return; }
            I = this; DontDestroyOnLoad(gameObject);
            foreach (var k in VolKeys) if (PlayerPrefs.HasKey(KeyPrefix + k)) _vol[k] = PlayerPrefs.GetFloat(KeyPrefix + k);
            ApplyVolumes();
            for (int i = 0; i < 12; i++) _oneShotPool.Add(NewSource($"oneshot{i}"));
        }

        AudioSource NewSource(string name, bool loop = false)
        {
            var go = new GameObject(name); go.transform.SetParent(transform);
            var s = go.AddComponent<AudioSource>(); s.playOnAwake = false; s.loop = loop; s.spatialBlend = 0f;
            return s;
        }

        // ---------- głośności (suwaki w ustawieniach) ----------
        public static float ToDb(float v) => v <= 0.0001f ? -80f : 40f * Mathf.Log10(Mathf.Clamp01(v));
        public float GetVolume(string key) => _vol[key];

        public void SetVolume(string key, float v01)
        {
            _vol[key] = Mathf.Clamp01(v01);
            PlayerPrefs.SetFloat(KeyPrefix + key, _vol[key]);
            ApplyVolumes();
        }

        void ApplyVolumes()
        {
            for (int i = 0; i < VolParams.Length; i++) mixer.SetFloat(VolParams[i], ToDb(_vol[VolKeys[i]]));
        }

        // ---------- start: pętle, rzadkie zdarzenia, stemy muzyki ----------
        public IEnumerator Begin()
        {
            foreach (var l in library.loops)
            {
                var e = library.Find(l.clipId); if (e == null || e.clip == null) continue;
                var s = NewSource("loop_" + l.clipId, true);
                s.clip = e.clip; s.outputAudioMixerGroup = groups[(int)l.bus]; s.volume = l.gain;
                s.time = (float)(_cosmetic.NextDouble() * Mathf.Max(0.1f, e.clip.length - 0.2f)); s.Play();
                yield return null; // rozłóż koszt startu na klatki (WebGL)
            }
            foreach (var r in library.rare) StartCoroutine(RareRoutine(r));
            foreach (var st in library.stems)
            {
                if (st.clip == null) continue;
                var s = NewSource("stem_" + st.id, true); s.clip = st.clip; s.volume = 0f;
                s.outputAudioMixerGroup = groups[(int)Bus.Music]; s.Play();
                _stemSrc[st.id] = s; _stemTarget[st.id] = 0f;
            }
            SetWindow(WindowState.Closed, instant: true);
        }

        IEnumerator RareRoutine(AmbientEvent r)
        {
            var e = library.Find(r.clipId); if (e == null || e.clip == null) yield break;
            while (true)
            {
                yield return new WaitForSeconds((float)(r.minSec + _cosmetic.NextDouble() * (r.maxSec - r.minSec)));
                float pan = r.randomPan ? (float)(_cosmetic.NextDouble() * 1.6 - .8) : 0f;
                PlayClip(e.clip, groups[(int)r.bus], r.gain * (0.7f + 0.3f * (float)_cosmetic.NextDouble()), 0.95f + 0.1f * (float)_cosmetic.NextDouble(), pan);
            }
        }

        // ---------- okienko jako filtr ----------
        public void SetDoorSealed(bool sealedDoor) { _door = sealedDoor; if (_window == WindowState.Closed) SetWindow(WindowState.Closed, instant: false); }

        public void SetWindow(WindowState s, bool instant = false)
        {
            bool first = instant; bool changed = s != _window || instant;
            _window = s;
            float cutoff = s switch { WindowState.Closed => _door ? 1100f : 1900f, WindowState.Ajar => 5000f, _ => 11000f };
            float vol = s switch { WindowState.Closed => _door ? .3f : .6f, WindowState.Ajar => .85f, _ => 1f };
            if (_windowRoutine != null) StopCoroutine(_windowRoutine);
            _windowRoutine = StartCoroutine(FilterTo(cutoff, vol, instant ? 0f : 0.25f));
            if (changed && !first) Sfx(s == WindowState.Open ? "window_up" : "window_down");
        }

        IEnumerator FilterTo(float cutoff, float vol, float time)
        {
            mixer.GetFloat("OutsideCutoff", out float c0); mixer.GetFloat("OutsideVol", out float v0);
            float vdb = ToDb(vol);
            for (float t = 0; t < time; t += Time.unscaledDeltaTime)
            {
                float k = Mathf.SmoothStep(0, 1, t / time);
                // częstotliwość interpolujemy logarytmicznie (ucho słyszy oktawy)
                mixer.SetFloat("OutsideCutoff", Mathf.Exp(Mathf.Lerp(Mathf.Log(Mathf.Max(10f, c0)), Mathf.Log(cutoff), k)));
                mixer.SetFloat("OutsideVol", Mathf.Lerp(v0, vdb, k));
                yield return null;
            }
            mixer.SetFloat("OutsideCutoff", cutoff); mixer.SetFloat("OutsideVol", vdb);
        }

        // ---------- SFX ----------
        /// <summary>Zagraj sfx_{id}. minGapMs blokuje spam (np. kopanie w stercie).</summary>
        public bool Sfx(string id, float minGapMs = 0f, float rateJitter = 0.03f)
        {
            var e = library.Find("sfx_" + id); if (e == null || e.clip == null) return false;
            float now = Time.unscaledTime * 1000f;
            if (minGapMs > 0 && _lastPlayed.TryGetValue(id, out var last) && now - last < minGapMs) return false;
            _lastPlayed[id] = now;
            PlayClip(e.clip, groups[(int)Bus.Sfx], e.gain, 1f + (float)((_cosmetic.NextDouble() * 2 - 1) * rateJitter), 0f);
            return true;
        }

        public void Knock(string kind) => Sfx("knock_" + (string.IsNullOrEmpty(kind) ? "polite" : kind));
        public void Steps(Okienko.Data.FootstepKind k) => Sfx("steps_" + k.ToString().ToLowerInvariant());
        public void Tick() { Sfx("lock_small", 60f); }

        void PlayClip(AudioClip clip, AudioMixerGroup g, float vol, float pitch, float pan)
        {
            AudioSource s = _oneShotPool.Find(x => !x.isPlaying) ?? _oneShotPool[0];
            s.outputAudioMixerGroup = g; s.clip = clip; s.volume = Mathf.Clamp01(vol); s.pitch = pitch; s.panStereo = pan; s.Play();
        }

        /// <summary>Mamrotanie zamiast głosu. intimacy 0..1: niżej, ciszej, wolniej. Ducking ambientu robi mikser (Duck Volume).</summary>
        public void Mumble(int textLength, float intimacy)
        {
            if (voiceBlips == null || voiceBlips.Length == 0) return;
            StartCoroutine(MumbleRoutine(Mathf.Min(14, Mathf.CeilToInt(textLength / 5f)), Mathf.Clamp01(intimacy)));
        }

        IEnumerator MumbleRoutine(int n, float intimacy)
        {
            for (int i = 0; i < n; i++)
            {
                var c = voiceBlips[_cosmetic.Next(voiceBlips.Length)];
                PlayClip(c, groups[(int)Bus.Voice], 0.5f * (1f - 0.5f * intimacy), Mathf.Lerp(1.0f, 0.75f, intimacy) + (float)(_cosmetic.NextDouble() - .5) * .2f, 0f);
                yield return new WaitForSeconds(0.13f);
            }
        }

        /// <summary>Jedno zdarzenie lampy = obraz + dźwięk. LampController podaje callback z błyskiem.</summary>
        public void LampBlink(Action visual)
        {
            Sfx("lamp_flicker");
            StartCoroutine(After(0.35f, visual));
        }
        IEnumerator After(float s, Action a) { yield return new WaitForSeconds(s); a?.Invoke(); }

        // ---------- muzyka: stemy z płynnym miksem scen ----------
        public void MusicScene(string sceneId)
        {
            var sc = library.scenes.Find(x => x.id == sceneId);
            var keys = new List<string>(_stemTarget.Keys);
            foreach (var k in keys) _stemTarget[k] = 0f;
            if (sc != null) for (int i = 0; i < sc.stems.Count; i++) if (_stemTarget.ContainsKey(sc.stems[i])) _stemTarget[sc.stems[i]] = sc.levels[i];
        }

        public void Sting(string id)
        {
            var e = library.stings.Find(x => x.id == "st_" + id); if (e == null || e.clip == null) return;
            PlayClip(e.clip, groups[(int)Bus.Music], e.gain <= 0 ? .9f : e.gain, 1f, 0f);
        }

        void Update()
        {
            // wygładzanie ~1,2 s (stała czasowa jak setTargetAtTime(…,1.2) w demie)
            float k = 1f - Mathf.Exp(-Time.unscaledDeltaTime / 1.2f);
            foreach (var kv in _stemSrc) kv.Value.volume = Mathf.Lerp(kv.Value.volume, _stemTarget[kv.Key], k);
        }
    }
}
