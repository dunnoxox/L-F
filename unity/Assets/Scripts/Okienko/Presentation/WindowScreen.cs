using System.Collections;
using System.Collections.Generic;
using Okienko.Audio;
using Okienko.Core;
using Okienko.Data;
using Okienko.Localization;
using TMPro;
using UnityEngine;
using UnityEngine.UI;

namespace Okienko.Presentation
{
    /// <summary>
    /// Okienko: puk, wpuszczenie gościa, 3 tury pytań, odwrócenie się do magazynu.
    /// Warstwy (od tyłu): Background(T1) -> Guest (sylwetka/twarz) -> Glass (szyba, tint+połysk) -> UI.
    /// Gdy guest.face puste: placeholder z nazwą postaci (jak w demie).
    /// </summary>
    public class WindowScreen : ScreenView
    {
        [Header("Warstwy")]
        public Image guestImage;
        public TMP_Text placeholderName;
        public CanvasGroup silhouette;          // gość za zasłonką przed wpuszczeniem
        [Header("UI")]
        public TMP_Text speakerLabel, sayText, knockLabel;
        public Button letInButton, turnAroundButton, questionPrefab;
        public RectTransform questionsRoot;
        public Image[] turnPips = new Image[3];
        public float typeSpeed = 0.016f;

        Coroutine _typing; GuestDefinition _g;
        readonly List<Button> _qButtons = new List<Button>();

        protected override void OnShow() { _g = Db.Guest(Session.CurrentGuest.id); StartCoroutine(Knock()); }

        IEnumerator Knock()
        {
            Clear(); SetFace("neutralna"); silhouette.alpha = 1;
            turnAroundButton.gameObject.SetActive(false); letInButton.gameObject.SetActive(true);
            knockLabel.text = Loc.T("knock"); AudioDirector.I.SetWindow(WindowState.Closed);
            yield return new WaitForSeconds(0.7f);
            AudioDirector.I.Knock(_g.knock != null ? _g.knock.name.Replace("sfx_knock_", "") : "polite");
            letInButton.onClick.RemoveAllListeners();
            letInButton.onClick.AddListener(LetIn);
        }

        void LetIn()
        {
            letInButton.gameObject.SetActive(false); knockLabel.text = ""; silhouette.alpha = 0;
            AudioDirector.I.SetWindow(WindowState.Open); AudioDirector.I.Sfx("bell_window");
            AudioDirector.I.Steps(_g.footsteps); AudioDirector.I.MusicScene("talk");
            Say(Session.CurrentGuest.opening, "mowi", "");
            ShowQuestions();
        }

        void ShowQuestions()
        {
            Clear();
            for (int i = 0; i < turnPips.Length; i++) turnPips[i].enabled = i < Session.Save.turn;
            if (Session.ConversationOver)
            {
                turnAroundButton.gameObject.SetActive(true);
                turnAroundButton.onClick.RemoveAllListeners();
                turnAroundButton.onClick.AddListener(Session.TurnToStorage);
                return;
            }
            foreach (var o in Session.OfferedQuestions())
            {
                var b = Instantiate(questionPrefab, questionsRoot); b.gameObject.SetActive(true);
                var label = b.GetComponentInChildren<TMP_Text>();
                label.text = (o.fromSecret ? $"<size=60%>{Loc.T("know")}</size>\n" : "") + o.question.text;
                var q = o.question;
                b.onClick.AddListener(() => OnAsk(q));
                _qButtons.Add(b);
            }
        }

        void OnAsk(QuestionData q)
        {
            AudioDirector.I.Tick();
            Session.Ask(q);
            if (q.mood == "klamie") { AudioDirector.I.MusicScene("tension"); StartCoroutine(BackToTalk(9f)); }
            Say(q.answer, q.mood, q.tone);
            ShowQuestions();
        }

        IEnumerator BackToTalk(float s) { yield return new WaitForSeconds(s); AudioDirector.I.MusicScene("talk"); }

        void Say(string text, string mood, string tone)
        {
            SetFace(mood); speakerLabel.text = Session.CurrentGuest.name;
            AudioDirector.I.Mumble(text.Length, tone == "niewygodne" || mood == "emocja" ? .8f : .2f);
            if (_typing != null) StopCoroutine(_typing);
            _typing = StartCoroutine(Type(text, mood));
        }

        IEnumerator Type(string text, string mood)
        {
            sayText.text = "";
            for (int i = 1; i <= text.Length; i++) { sayText.text = text.Substring(0, i); yield return new WaitForSeconds(typeSpeed); }
            if (mood == "mowi") { yield return new WaitForSeconds(0.9f); SetFace("neutralna"); }
        }

        void SetFace(string mood)
        {
            var s = _g != null ? _g.Face(mood) : null;
            guestImage.sprite = s; guestImage.enabled = s != null;
            placeholderName.gameObject.SetActive(s == null);
            if (s == null) placeholderName.text = $"{Session.CurrentGuest.name}\n<size=60%>{mood}</size>";
        }

        void Clear() { foreach (var b in _qButtons) if (b) Destroy(b.gameObject); _qButtons.Clear(); }
    }
}
