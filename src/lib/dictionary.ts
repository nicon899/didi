export type DictionaryEntry = {
    de: string,
    en: string,
    ukr: string,
    isHeader: boolean
}

export const dictionary: DictionaryEntry[] = [
    // GROUPS
    { de: "Gruppen", en: "Groups", ukr: "групи (hrupy)", isHeader: true },
    { de: "Vorwärts", en: "Forward", ukr: "Вперед (Vpered)", isHeader: false },
    { de: "Rückwärts", en: "Back", ukr: "Назад (Nazad)", isHeader: false },
    { de: "Auerbach", en: "Reverse", ukr: "Зворотний (Zvorotnyy)", isHeader: false },
    { de: "Delfin", en: "Inward", ukr: "Всередину (Vseredynu)", isHeader: false },
    { de: "Schrauben", en: "Twisting", ukr: "Скручування (Skruchuvannya)", isHeader: false },
    { de: "Handstand", en: "Armstand", ukr: "Стійка на руках (Stiyka na rukakh)", isHeader: false },
    // POSITIONS
    { de: "Ausführungen", en: "Positions", ukr: "закінчується (zakinchuyetʹsya)", isHeader: true },
    { de: "Gestreckt", en: "Straight", ukr: "розтягнутий (roztyahnutyy)", isHeader: false },
    { de: "Gehockt", en: "Tuck", ukr: "сидів (sydiv)", isHeader: false },
    { de: "Gehechtet", en: "Pike", ukr: "щука (shchuka)", isHeader: false },
    { de: "Freie Ausführung", en: "Free position", ukr: "", isHeader: false },
    // DIVES
    { de: "Sprünge", en: "Dives", ukr: "стрибки (strybky)", isHeader: true },
    { de: "Kopfsprung", en: "Forward Dive", ukr: "пірнати (pirnaty)", isHeader: false },
    { de: "Fußsprung", en: "Foot Dive", ukr: "стрибок ногою (strybok nohoyu)", isHeader: false },
    { de: "Schraube", en: "Twist", ukr: "гвинт (hvynt)", isHeader: false },
    { de: "Halbe Schraube", en: "Half Twist", ukr: "напівгвинт (napivhvynt)", isHeader: false },
]