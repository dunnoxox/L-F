using System.Collections.Generic;

namespace Okienko.Core
{
    public struct OfferedQuestion
    {
        public QuestionData question;
        public bool fromSecret; // pytanie odblokowane wiedzą "ze środka"
    }

    public static class DialogueRules
    {
        public const int TurnsPerGuest = 3;

        /// <summary>
        /// Pytania pokazane w turze. Pytanie z requires (znany sekret) zastępuje ostatnie pytanie o tym samym tonie;
        /// gdy brak takiego tonu, jest dodawane. Port qlist() z game.js.
        /// </summary>
        public static List<OfferedQuestion> Offer(GuestData g, int turn, SaveData save)
        {
            var all = g.turns[turn].questions;
            var outList = new List<OfferedQuestion>();
            foreach (var q in all)
                if (string.IsNullOrEmpty(q.requires)) outList.Add(new OfferedQuestion { question = q });

            foreach (var q in all)
            {
                if (string.IsNullOrEmpty(q.requires) || !save.HasSecret(q.requires)) continue;
                int k = outList.FindLastIndex(o => o.question.tone == q.tone);
                var item = new OfferedQuestion { question = q, fromSecret = true };
                if (k >= 0) outList[k] = item; else outList.Add(item);
            }
            return outList;
        }
    }
}
