import { getDD, getDDJunior } from "./caculateDD"

export type Group = "1" | "2" | "3" | "4" | "5" | "6" | "5_1" | "5_2"
export type Position = "A" | "B" | "C" | "D" | "E"
export type Dive = {
    id: string,
    de: string
}

export const getSKG = (dive: string, height: number, position: Position) => {
    console.log(`${dive}, ${height}, ${position}`)
    let ddJunior = getDDJunior(dive, height, position)
    return ddJunior === false ? getDD(dive, height, position) : ddJunior
}

export const getDiveByNumber = (number: string) => {
    for (let div of DIVES) {
        if (div.id === number) {
            return div;
        }
    }
    return { id: number, de: "Unbekannter Sprung" }
}

export const DIVES: Dive[] = [
    { id: "010", de: "Abfaller vorwärts" },
    { id: "020", de: "Abfaller rückwärts" },
    { id: "100", de: "Fußsprung vorwärts" },
    { id: "101", de: "Kopfsprung vorwärts" },
    { id: "102", de: "Salto vorwärts" },
    { id: "103", de: "1 ½ Salto vorwärts" },
    { id: "104", de: "Doppelsalto vorwärts" },
    { id: "105", de: "2 ½ Salto vorwärts" },
    { id: "106", de: "Dreifacher Salto vorwärts" },
    { id: "107", de: "3 ½ Salto vorwärts" },
    { id: "109", de: "4 ½ Salto vorwärts" },
    { id: "112", de: "Fliegender Salto vorwärts" },
    { id: "113", de: "Fliegender 1 ½ Salto vorwärts" },
    { id: "114", de: "Fliegender Doppelsalto vorwärts" },
    { id: "115", de: "Fliegender 2 ½ Salto vorwärts" },
    { id: "200", de: "Fußsprung rückwärts" },
    { id: "201", de: "Kopfsprung rückwärts" },
    { id: "202", de: "Salto rückwärts" },
    { id: "203", de: "1 ½ Salto rückwärts" },
    { id: "204", de: "Doppelsalto rückwärts" },
    { id: "205", de: "2 ½ Salto rückwärts" },
    { id: "206", de: "Dreifacher Salto rückwärts" },
    { id: "207", de: "3 ½ Salto rückwärts" },
    { id: "209", de: "4 ½ Salto rückwärts" },
    { id: "212", de: "Fliegender Salto rückwärts" },
    { id: "213", de: "Fliegender 1 ½ Salto rückwärts" },
    { id: "215", de: "Fliegender 2 ½ Salto rückwärts" },
    { id: "301", de: "Auerbachkopfsprung" },
    { id: "302", de: "Auerbachsalto" },
    { id: "303", de: "1 ½ Auerbachsalto" },
    { id: "304", de: "Auerbach-Doppelsalto" },
    { id: "305", de: "2 ½ Auerbachsalto" },
    { id: "306", de: "Dreifacher Auerbachsalto" },
    { id: "307", de: "3 ½ Auerbachsalto" },
    { id: "309", de: "4 ½ Auerbachsalto" },
    { id: "312", de: "Fliegender Auerbachsalto" },
    { id: "313", de: "Fliegender 1 ½ Auerbachsalto" },
    { id: "315", de: "Fliegender 2 ½ Auerbachsalto" },
    { id: "401", de: "Delfinkopfsprung" },
    { id: "402", de: "Delfinsalto" },
    { id: "403", de: "1 ½ Delfinsalto" },
    { id: "404", de: "Delfin-Doppelsalto" },
    { id: "405", de: "2 ½ Delfinsalto" },
    { id: "407", de: "3 ½ Delfinsalto" },
    { id: "409", de: "4 ½ Delfinsalto" },
    { id: "412", de: "Fliegender Delfinsalto" },
    { id: "413", de: "Fliegender 1 ½ Delfinsalto" },
    { id: "5021", de: "Abfaller rückwärts mit ½ Schraube" },
    { id: "5101", de: "Fußsprung vorwärts mit ½ Schraube" },
    { id: "5102", de: "Fußsprung vorwärts mit 1 Schraube" },
    { id: "5111", de: "Kopfsprung vorwärts mit ½ Schraube" },
    { id: "5112", de: "Kopfsprung vorwärts mit 1 Schraube" },
    { id: "5121", de: "Vorwärtssalto mit 1/2 Schraube" },
    { id: "5122", de: "Vorwärtssalto mit 1 Schraube" },
    { id: "5124", de: "Vorwärtssalto mit 2 Schrauben" },
    { id: "5126", de: "Vorwärtssalto mit 3 Schrauben" },
    { id: "5131", de: "1 ½ Salto vorwärts mit ½ Schraube" },
    { id: "5132", de: "1 ½ Salto vorwärts mit 1 Schraube" },
    { id: "5134", de: "1 ½ Salto vorwärts mit 2 Schrauben" },
    { id: "5136", de: "1 ½ Salto vorwärts mit 3 Schrauben" },
    { id: "5138", de: "1 ½ Salto vorwärts mit 4 Schrauben" },
    { id: "5141", de: "2 Salto vorwärts mit ½ Schraube" },
    { id: "5151", de: "2 ½ Salto vorwärts mit ½ Schraube" },
    { id: "5152", de: "2 ½ Salto vorwärts mit 1 Schraube" },
    { id: "5154", de: "2 ½ Salto vorwärts mit 2 Schrauben" },
    { id: "5156", de: "2 ½ Salto vorwärts mit 3 Schrauben" },
    { id: "5172", de: "3 ½ Salto vorwärts mit 1 Schraube" },
    { id: "5201", de: "Fußsprung rückwärts mit ½ Schraube" },
    { id: "5202", de: "Fußsprung rückwärts mit 1 Schraube" },
    { id: "5211", de: "Kopfsprung rückwärts mit ½ Schraube" },
    { id: "5212", de: "Kopfsprung rückwärts mit 1 Schraube" },
    { id: "5221", de: "Rückwärtssalto mit ½ Schraube" },
    { id: "5222", de: "Rückwärtssalto mit 1 Schraube" },
    { id: "5223", de: "Rückwärtssalto mit 1 ½ Schrauben" },
    { id: "5225", de: "Rückwärtssalto mit 2 ½ Schrauben" },
    { id: "5227", de: "Rückwärtssalto mit 3 ½ Schrauben" },
    { id: "5231", de: "1 ½ Salto rückwärts mit ½ Schraube" },
    { id: "5233", de: "1 ½ Salto rückwärts mit 1 ½ Schrauben" },
    { id: "5235", de: "1 ½ Salto rückwärts mit 2 ½ Schrauben" },
    { id: "5237", de: "1 ½ Salto rückwärts mit 3 ½ Schrauben" },
    { id: "5239", de: "1 ½ Salto rückwärts mit 4 ½ Schrauben" },
    { id: "5251", de: "2 ½ Salto rückwärts mit ½ Schraube" },
    { id: "5253", de: "2 ½ Salto rückwärts mit 1 ½ Schrauben" },
    { id: "5255", de: "2 ½ Salto rückwärts mit 2 ½ Schrauben" },
    { id: "5271", de: "3 ½ Salto rückwärts mit ½ Schraube" },
    { id: "5311", de: "Auerbachkopfsprung mit ½ Schraube" },
    { id: "5312", de: "Auerbachkopfsprung mit 1 Schraube" },
    { id: "5321", de: "Auerbachsalto mit ½ Schraube" },
    { id: "5322", de: "Auerbachsalto mit 1 Schraube" },
    { id: "5323", de: "Auerbachsalto mit 1 ½ Schrauben" },
    { id: "5325", de: "Auerbachsalto mit 2 ½ Schrauben" },
    { id: "5331", de: "1 ½ Auerbachsalto mit ½ Schraube" },
    { id: "5333", de: "1 ½ Auerbachsalto mit 1 ½ Schrauben" },
    { id: "5335", de: "1 ½ Auerbachsalto mit 2 ½ Schrauben" },
    { id: "5337", de: "1 ½ Auerbachsalto mit 3 ½ Schrauben" },
    { id: "5339", de: "1 ½ Auerbachsalto mit 4 ½ Schrauben" },
    { id: "5351", de: "2 ½ Auerbachsalto mit ½ Schraube" },
    { id: "5353", de: "2 ½ Auerbachsalto mit 1 ½ Schrauben" },
    { id: "5355", de: "2 ½ Auerbachsalto mit 2 ½ Schrauben" },
    { id: "5371", de: "3 ½ Auerbachsalto mit ½ Schraube" },
    { id: "5411", de: "Delfinkopfsprung mit ½ Schraube" },
    { id: "5412", de: "Delfinkopfsprung mit 1 Schraube" },
    { id: "5421", de: "Delfinsalto mit ½ Schraube" },
    { id: "5422", de: "Delfinsalto mit 1 Schraube" },
    { id: "5432", de: "1 ½ Delfinsalto mit 1 Schraube" },
    { id: "5434", de: "1 ½ Delfinsalto mit 2 Schrauben" },
    { id: "5436", de: "1 ½ Delfinsalto mit 3 Schrauben" },
    { id: "600", de: "Handstand-Kopfsprung vorwärts" },
    { id: "611", de: "Handstand mit ½ Salto vorwärts" },
    { id: "612", de: "Handstand mit 1 Salto vorwärts" },
    { id: "6122", de: "Handst.-Vorwärtssalto mit 1 Schraube" },
    { id: "6124", de: "Handst.-Vorwärtssalto mit 2 Schrauben" },
    { id: "614", de: "Handstand mit Doppelsalto vorwärts" },
    { id: "6142", de: "Handst.-Doppelsalto vorw. mit 1 Schr." },
    { id: "6144", de: "Handst.-Doppelsalto vorw. mit 2 Schr." },
    { id: "616", de: "Handstand mit Dreifachsalto vorw." },
    { id: "6162", de: "Handst.-Dreifachsalto vorw. mit 1 Schr." },
    { id: "621", de: "Handstand mit ½ Salto rückwärts" },
    { id: "622", de: "Handstand mit 1 Salto rückwärts" },
    { id: "6221", de: "Handst.-Salto rückw. mit ½ Schraube" },
    { id: "623", de: "Handstand mit 1 ½ Salto rückwärts" },
    { id: "624", de: "Handstand mit Doppelsalto rückwärts" },
    { id: "6241", de: "Handst.-Doppelsalto rw. mit ½ Schr." },
    { id: "6243", de: "Handst.-Doppelsalto rw. mit 1 ½ Schr." },
    { id: "6245", de: "Handst.-Doppelsalto rw. mit 2 ½ Schr." },
    { id: "626", de: "Handstand mit Dreifachsalto rückwärts" },
    { id: "6261", de: "Handst.-Dreifachsalto rw. mit ½ Schr." },
    { id: "631", de: "Handstand-Auerbachkopfsprung" },
    { id: "632", de: "Handstand-Auerbachsalto" },
    { id: "633", de: "Handstand mit 1 ½ Auerbachsalto" },
    { id: "634", de: "Handstand mit Doppelauerbachsalto" },
    { id: "636", de: "Handstand mit Dreifachauerbachsalto" },
]