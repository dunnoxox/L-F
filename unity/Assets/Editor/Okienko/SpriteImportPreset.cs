using UnityEditor;
using UnityEngine;

namespace Okienko.EditorTools
{
    /// <summary>
    /// Automatyczne ustawienia importu grafik z Assets/Okienko/Art: Sprite (2D and UI), Single, bez mipmap, PPU 100.
    /// Tła (bg, in) i twarze (ppl) to JPG: Compression Normal, max 2048. Rzeczy to PNG z alfą: Compression Normal, max 512.
    /// WebGL: osobne nadpisanie platformy ze zmniejszoną kompresją (ASTC lub DXT5) ustawisz w Build Profiles.
    /// </summary>
    public class SpriteImportPreset : AssetPostprocessor
    {
        void OnPreprocessTexture()
        {
            if (!assetPath.StartsWith("Assets/Okienko/Art/")) return;
            var t = (TextureImporter)assetImporter;
            t.textureType = TextureImporterType.Sprite; t.spriteImportMode = SpriteImportMode.Single;
            t.mipmapEnabled = false; t.spritePixelsPerUnit = 100; t.alphaIsTransparency = assetPath.Contains("/items/");
            t.maxTextureSize = assetPath.Contains("/items/") ? 512 : 2048;
            t.textureCompression = TextureImporterCompression.Compressed; t.filterMode = FilterMode.Bilinear;
        }
    }
}
