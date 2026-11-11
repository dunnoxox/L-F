using TMPro;
using UnityEngine;

namespace Okienko.Localization
{
    /// <summary>Wpisz klucz (np. "start") w inspektorze; tekst odświeża się przy zmianie języka.</summary>
    [RequireComponent(typeof(TMP_Text))]
    public class LocalizedLabel : MonoBehaviour
    {
        public string key;
        TMP_Text _label;
        void Awake() { _label = GetComponent<TMP_Text>(); }
        void OnEnable() { Loc.Changed += Refresh; Refresh(); }
        void OnDisable() { Loc.Changed -= Refresh; }
        public void Refresh() { if (_label != null && !string.IsNullOrEmpty(key)) _label.text = Loc.T(key); }
    }
}
