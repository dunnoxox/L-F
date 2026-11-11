# Paczka grafik: 96 realnych przedmiotów

Zawartość:
- `lista_przedmiotow.md` / `.csv`: 96 przedmiotów (id po angielsku, nazwa polska, dzielnica), 12 arkuszy po 8.
- `prompt_chatgpt_jednym_ciagiem.md`: JEDEN prompt do wklejenia w ChatGPT (opcja A).
- `prompty_per_arkusz.md`: prompty osobno na każdy arkusz.
- `referencje/ref_styl_przedmiotow.png`: wzór stylu, ZAŁĄCZASZ do pierwszej wiadomości w ChatGPT.
- `generate_items.py`: opcja B, jedno polecenie przez API OpenAI, na końcu ZIP (płatne, wymaga klucza API).
- `cut_sheets.py`: tnie gotowe arkusze na warstwy gry (`_f.png` wypełnienie, `_o.png` kontur).
- `items.json`: dane (prompty, id, dzielnice), używane przez skrypty i grę.

Kolejność: wygeneruj arkusze (A lub B) -> wrzuć je jako sheet01.png ... sheet12.png do jednego folderu -> odeślij mi je w zipie (albo uruchom `python3 cut_sheets.py folder items.json wynik`).
