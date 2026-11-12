/* Teksty ekranu tytułowego, menu, ustawień i wejścia do gry (UX_PROWADZENIE §8.3, §8.4, §9.3).
   Osobny plik, bo data.js generuje build_data.py; klucze nadpisują LANG. Port do Unity: lang/pl.json. */
Object.assign(window.LANG,{
 t_lost:'LOST',t_amp:'&',t_found:'FOUND',t_fraud:'FRAUD',
 t_sub:'Nocne biuro rzeczy znalezionych. Ktoś puka w szybę.',
 t_audio:'Najlepiej w słuchawkach. Kliknij, żeby włączyć dźwięk.',
 t_loading:'Zapalam lampę…',
 m_nav:'Menu główne',
 m_cont:'Kontynuuj',m_cont_meta:'Dzień {n} · {d} · ${k}',
 m_new:'Nowa zmiana',m_new_meta:'Dzień 1 · {d} · 23:40',
 m_new_conf:'Zacząć od nowa? Zapis z dnia {n} zostanie usunięty.',m_yes:'Tak, od nowa',m_no:'Zostaw',
 m_set:'Ustawienia',m_cred:'Kredyty',m_quit:'Wyjście',m_ends:'Zakończenia {n}/{m}',
 t_cred:['LOST & FRAUD','Pomysł, reżyseria i decyzje: Tommy','Świat, dialogi i kod: Tommy i Claude','Grafika: linoryt sodowy, z promptów projektu','Muzyka i efekty: ElevenLabs','Dziękujemy każdemu, kto kiedyś coś zgubił i wrócił po to w nocy.'],
 s_title:'Ustawienia',p_title:'Pauza',s_sound:'Dźwięk',s_image:'Obraz',s_access:'Dostępność',s_data:'Dane',
 s_full:'Pełny ekran',s_reduce:'Mniej efektów (bez błysków i pulsowania)',s_bright:'Jasność',
 s_ts:'Rozmiar tekstu',s_hints:'Podpowiedzi zawsze widoczne',s_hc:'Wyraźniejsze ramki',
 s_lang:'Język',s_soon:'wkrótce',s_del:'Zapis gry',s_del_b:'Usuń zapis',s_del_conf:'Usunąć zapis z dnia {d}? Nie da się tego cofnąć.',s_del_yes:'Usuń',s_nosave:'Brak zapisu. Gra zapisuje się sama po każdej wizycie.',
 p_back:'Wróć',p_menu:'Menu główne',p_saved:'Zapisano po ostatniej wizycie: dzień {d}',
 pr1_strip_a:'Ściągnij pasek z numerem',pr1_stripnum:'tel. 0 9 0 8 · 5 5 · 1 7',pr1_step:'Pociągnij pasek w dół.',
 pr2_btn:'Podpisz',pr2_sig:'Podpis pracownika',pr2_step:'Podpisz. Pole na imię zostaje puste.',
 hint_deliver_d1:'Tramwaje zostawiają rzeczy w skrzyniach. Zajrzyj do jednej, zanim ktoś zapuka.',
 hint_curtain:'Odsuń zasłonkę: kliknij w okienko.',
 next_btn:'Dalej'
});
