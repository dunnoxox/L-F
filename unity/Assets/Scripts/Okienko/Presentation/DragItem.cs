using System;
using UnityEngine;
using UnityEngine.EventSystems;

namespace Okienko.Presentation
{
    /// <summary>
    /// Gest zamiast stempla. Przeciągnij rzecz na szybę = wydaj; na strefy = odmów/zatrzymaj/zadzwoń. Puszczenie poza celem = powrót.
    /// Działa dla myszy, dotyku i pada (Input System + EventSystem). Klik bez ruchu (&lt; clickThreshold px) = onClick (do sterty).
    /// </summary>
    public class DragItem : MonoBehaviour, IBeginDragHandler, IDragHandler, IEndDragHandler, IPointerClickHandler
    {
        public RectTransform glass;                 // cel "wydaj"
        public RectTransform[] zones;               // strefy decyzji
        public string[] zoneActions;                // akcje zgodne z zones
        public string glassAction = "wydaj";
        public bool returnOnMiss = true;
        public float clickThreshold = 8f;
        public Action<string> onDecision;
        public Action onClick;

        RectTransform _rt; Canvas _canvas; Vector2 _home; float _moved; Vector2 _start;

        void Awake() { _rt = (RectTransform)transform; _canvas = GetComponentInParent<Canvas>(); }

        public void OnBeginDrag(PointerEventData e) { _home = _rt.anchoredPosition; _start = e.position; _moved = 0; _rt.SetAsLastSibling(); }
        public void OnDrag(PointerEventData e)
        {
            _rt.anchoredPosition += e.delta / _canvas.scaleFactor;
            _moved = Mathf.Max(_moved, (e.position - _start).magnitude);
        }

        public void OnEndDrag(PointerEventData e)
        {
            Vector2 centre = RectTransformUtility.WorldToScreenPoint(e.pressEventCamera, _rt.TransformPoint(_rt.rect.center));
            for (int i = 0; zones != null && i < zones.Length; i++)
                if (RectTransformUtility.RectangleContainsScreenPoint(zones[i], centre, e.pressEventCamera)) { onDecision?.Invoke(zoneActions[i]); return; }
            if (glass != null && RectTransformUtility.RectangleContainsScreenPoint(glass, centre, e.pressEventCamera)) { onDecision?.Invoke(glassAction); return; }
            if (returnOnMiss) _rt.anchoredPosition = _home;
        }

        public void OnPointerClick(PointerEventData e) { if (_moved < clickThreshold) onClick?.Invoke(); }
    }
}
