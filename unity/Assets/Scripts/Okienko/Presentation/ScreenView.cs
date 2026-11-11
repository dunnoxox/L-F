using System.Collections;
using Okienko.Core;
using UnityEngine;

namespace Okienko.Presentation
{
    /// <summary>Jeden ekran = jedna faza. Widok tylko pokazuje stan i woła komendy GameSession; nie zawiera reguł gry.</summary>
    [RequireComponent(typeof(CanvasGroup))]
    public abstract class ScreenView : MonoBehaviour
    {
        public Phase phase;
        protected GameSession Session;
        protected Okienko.Data.GameDatabase Db;
        CanvasGroup _cg;

        public void Init(GameSession s, Okienko.Data.GameDatabase db) { Session = s; Db = db; _cg = GetComponent<CanvasGroup>(); Hide(); }
        public CanvasGroup Group => _cg;
        void Hide() { _cg.alpha = 0; _cg.blocksRaycasts = false; gameObject.SetActive(false); }

        public IEnumerator Show(float fade)
        {
            gameObject.SetActive(true); OnShow();
            for (float t = 0; t < fade; t += Time.unscaledDeltaTime) { _cg.alpha = t / fade; yield return null; }
            _cg.alpha = 1; _cg.blocksRaycasts = true;
        }

        public IEnumerator Close(float fade)
        {
            _cg.blocksRaycasts = false;
            for (float t = 0; t < fade; t += Time.unscaledDeltaTime) { _cg.alpha = 1 - t / fade; yield return null; }
            OnHide(); Hide();
        }

        protected abstract void OnShow();
        protected virtual void OnHide() { }
    }
}
