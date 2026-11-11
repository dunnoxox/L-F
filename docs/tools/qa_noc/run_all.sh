#!/bin/bash
# Nocne testy LOST & FRAUD. Uruchom z dowolnego miejsca: bash docs/tools/qa_noc/run_all.sh
# Dane gry budowane są świeżo z koncept/okienko_rozmowy_v3*.md (game/data.js w repo bywa nieaktualny, zob. docs/QA_NOC.md B1).
set -e
cd "$(dirname "$0")"; ROOT="$(cd ../../..; pwd)"
mkdir -p .tmp wyniki
sed "s#/mnt/project-files/koncept#$ROOT/koncept#g" "$ROOT/game/build_data.py" > .tmp/bd.py
(cd .tmp && python3 -I bd.py)
export DATA="$PWD/.tmp/data.js"
node static.js   > wyniki/01_statyka.txt
node a2.js       > wyniki/02_liczniki_kasa_kolejnosc.txt
N=${N:-300} node batch.js > wyniki/03_strategie_i_pokrycie.txt
N=${REACH_N:-1500000} node reach.js > wyniki/04_osiagalnosc_zakonczen.txt
node rhythm.js   > wyniki/05_rytm_i_czas.txt
node sample.js   > wyniki/06_probka_scen.txt
node lint.js     > wyniki/07_lint_jezyka.txt
echo "Gotowe: $(pwd)/wyniki"
