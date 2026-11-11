using System.Collections;
using System.Collections.Generic;
using Okienko.Core;
using UnityEngine;

namespace Okienko.Presentation
{
    /// <summary>Przełącza ekrany po zmianie fazy. Przejście = zgaszenie, zmiana, rozjaśnienie (450 ms jak w demie). Kolejkuje szybkie zmiany.</summary>
    public class ScreenRouter : MonoBehaviour
    {
        public List<ScreenView> screens = new List<ScreenView>();
        public float fadeSeconds = 0.45f;
        public bool reduceFlashes; // opcja dostępności "Ogranicz błyski i wstrząsy"

        readonly Queue<Phase> _queue = new Queue<Phase>();
        bool _busy; ScreenView _current;

        public void Bind(GameSession s, Okienko.Data.GameDatabase db)
        {
            foreach (var v in screens) v.Init(s, db);
            s.PhaseChanged += p => { _queue.Enqueue(p); if (!_busy) StartCoroutine(Pump()); };
        }

        IEnumerator Pump()
        {
            _busy = true;
            while (_queue.Count > 0)
            {
                var p = _queue.Dequeue();
                var next = screens.Find(v => v.phase == p);
                if (next == null) { Debug.LogError($"[Router] Brak ekranu dla fazy {p}"); continue; }
                if (_current != null) yield return _current.Close(fadeSeconds * 0.5f);
                _current = next;
                yield return _current.Show(fadeSeconds * 0.5f);
            }
            _busy = false;
        }
    }
}
