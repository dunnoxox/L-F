using System.Collections.Generic;

namespace Okienko.Core
{
    public struct PlacedItem
    {
        public string spriteId;
        public bool isTarget;
        public float x, y, size, rotation; // x,y w pikselach referencyjnych 1536x1024 (jak w demie)
    }

    /// <summary>Czysta logika dnia: skład dostawy, burze, układ sterty. Port z game.js (dayItems, effLine, pile).</summary>
    public static class DayPlanner
    {
        public static IReadOnlyList<string> GuestIds(CalendarData cal, int day)
        {
            foreach (var d in cal.days) if (d.day == day) return d.guests;
            return new List<string>();
        }

        /// <summary>Dodatkowa "zwykła rzecz" dnia (wypełniacz) i jej linia.</summary>
        public static (string sprite, int line) Filler(CalendarData cal, int seed, int day)
        {
            var r = SeedHash.Stream(seed, "fill" + day);
            string sprite = cal.fillerPool[r.NextInt(cal.fillerPool.Count)];
            int line = cal.lines[r.NextInt(cal.lines.Count)];
            return (sprite, line);
        }

        /// <summary>0 = brak burzy, 1 lub 2 = o ile skrzyń przesunęły się rzeczy.</summary>
        public static int RollStorm(CalendarData cal, int seed, int day)
        {
            if (!cal.stormDays.Contains(day)) return 0;
            return 1 + (SeedHash.Stream(seed, "burza" + day).Next() < 0.5 ? 1 : 0);
        }

        public static int EffectiveLine(CalendarData cal, int line, int stormShift)
        {
            if (stormShift == 0) return line;
            int i = cal.lines.IndexOf(line);
            return cal.lines[(i + stormShift) % cal.lines.Count];
        }

        /// <summary>Pozycja punktu "sekretu" na rzeczy (procent szerokości/wysokości), gdy rzecz nie ma grafiki wnętrza.</summary>
        public static (float x, float y) HotSpot(int seed, string guestId)
        {
            var r = SeedHash.Stream(seed, guestId + "hot");
            return (30f + (float)r.Next() * 40f, 30f + (float)r.Next() * 40f);
        }

        /// <summary>
        /// Zawartość jednej skrzyni przy przekopywaniu. Cel leży w skrzyni tylko przy właściwej linii efektywnej.
        /// Kolejność wywołań RNG jak w demie; tasowanie to Fisher-Yates (inny wynik niż w przeglądarce).
        /// </summary>
        public static List<PlacedItem> BuildCrate(CalendarData cal, int seed, string guestId, string targetSprite,
            int targetEffectiveLine, int crateLine, bool extraShelf)
        {
            var r = SeedHash.Stream(seed, guestId + "p" + crateLine);
            var pool = new List<string>(cal.fillerPool);
            r.Shuffle(pool);
            int count = extraShelf ? 7 : 12;
            var ids = pool.GetRange(0, System.Math.Min(count, pool.Count));
            bool hasTarget = crateLine == targetEffectiveLine;
            if (hasTarget) ids.Insert(0, targetSprite);

            var res = new List<PlacedItem>(ids.Count);
            for (int i = 0; i < ids.Count; i++)
            {
                bool t = hasTarget && i == 0;
                float size = t ? 140f : 115f + (float)r.Next() * 60f;
                float x = t ? 200f + (float)r.Next() * 500f : 60f + (float)r.Next() * 760f;
                float y = t ? 250f + (float)r.Next() * 180f : 80f + (float)r.Next() * 430f;
                float rot = (float)(int)(r.Next() * 70 - 35);
                res.Add(new PlacedItem { spriteId = ids[i], isTarget = t, x = x, y = y, size = size, rotation = rot });
            }
            return res;
        }
    }
}
