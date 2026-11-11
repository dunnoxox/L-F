using System.Collections;
using Okienko.Audio;
using UnityEngine;
using UnityEngine.UI;

namespace Okienko.Presentation
{
    /// <summary>Lampa: jedno zdarzenie = obraz i dźwięk. Odstęp 28-73 s, własny RNG (nie seed gry). Ulepszenie "lampa" wyłącza mruganie.</summary>
    public class LampController : MonoBehaviour
    {
        public Image dimOverlay;     // czarna nakładka na cały ekran
        public float peakAlpha = 0.55f;
        public bool reduceFlashes;   // dostępność: miękkie przygaszenie zamiast błysku
        public bool lampUpgraded;
        readonly System.Random _r = new System.Random();

        IEnumerator Start()
        {
            while (true)
            {
                yield return new WaitForSeconds(28f + (float)_r.NextDouble() * 45f);
                if (lampUpgraded) continue;
                AudioDirector.I.LampBlink(() => StartCoroutine(Flash()));
            }
        }

        IEnumerator Flash()
        {
            float dur = reduceFlashes ? 0.5f : 0.26f, a = reduceFlashes ? peakAlpha * 0.4f : peakAlpha;
            var c = dimOverlay.color; c.a = a; dimOverlay.color = c;
            for (float t = 0; t < dur; t += Time.unscaledDeltaTime) { c.a = Mathf.Lerp(a, 0, t / dur); dimOverlay.color = c; yield return null; }
            c.a = 0; dimOverlay.color = c;
        }
    }
}
