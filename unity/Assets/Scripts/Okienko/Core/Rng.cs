using System;

namespace Okienko.Core
{
    /// <summary>
    /// Deterministyczny PRNG (mulberry32), identyczny z game.js dema.
    /// NIE używać UnityEngine.Random w logice rozgrywki. Wektory testowe: Data/rng_vectors.json.
    /// </summary>
    public sealed class Mulberry32
    {
        uint _a;
        public Mulberry32(uint seed) { _a = seed; }

        /// <summary>Liczba z [0,1), jak rng()() w JS.</summary>
        public double Next()
        {
            unchecked
            {
                _a += 0x6D2B79F5u;
                uint a = _a;
                uint t = (a ^ (a >> 15)) * (1u | a);
                t = (t + (t ^ (t >> 7)) * (61u | t)) ^ t;
                return (t ^ (t >> 14)) / 4294967296.0;
            }
        }

        public int NextInt(int maxExclusive) => (int)(Next() * maxExclusive);
        public double Range(double a, double b) => a + Next() * (b - a);

        /// <summary>Fisher-Yates. UWAGA: wynik różni się od dema (tam sort z losowym komparatorem, zależny od silnika JS).</summary>
        public void Shuffle<T>(System.Collections.Generic.IList<T> list)
        {
            for (int i = list.Count - 1; i > 0; i--)
            {
                int j = NextInt(i + 1);
                (list[i], list[j]) = (list[j], list[i]);
            }
        }
    }

    /// <summary>Klucz tekstowy + seed gry -> ziarno strumienia (FNV-1a, jak hash() w game.js).</summary>
    public static class SeedHash
    {
        public static uint Hash(int seed, string key)
        {
            unchecked
            {
                uint h = (uint)((ulong)(uint)seed * 2654435761UL);
                foreach (char c in key) h = (h ^ c) * 16777619u;
                return h;
            }
        }

        public static Mulberry32 Stream(int seed, string key) => new Mulberry32(Hash(seed, key));
    }
}
