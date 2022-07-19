import type { Position } from "./diveDB"

export const juniorTable = {
    "100": {
        "A": {
            1: 1.0,
            3: 1.1,
            5: 1.2
        },
        "B": {
            1: 1.2,
            3: 1.3,
            5: 1.3
        },
        "C": {
            1: 1.1,
            3: 1.2,
            5: 1.2
        }
    },
    "200": {
        "A": {
            1: 1.1,
            3: 1.2,
            5: 1.3
        },
        "B": {
            1: 1.3,
            3: 1.4,
            5: 1.4
        },
        "C": {
            1: 1.2,
            3: 1.3,
            5: 1.3
        }
    },
    "010": {
        "A": {
            1: null,
            3: 1.2,
            5: 1.3
        },
        "B": {
            1: 1.0,
            3: 1.1,
            5: 1.1
        },
        "C": {
            1: null,
            3: 1.2,
            5: 1.3
        }
    },
    "020": {
        "A": {
            1: 1.2,
            3: 1.3,
            5: 1.4
        },
        "B": {
            1: null,
            3: 1.3,
            5: 1.4
        },
        "C": {
            1: null,
            3: 1.3,
            5: 1.4
        }
    },
    "5101": {
        "A": {
            1: 1.2,
            3: 1.3,
            5: 1.4
        },
        "B": {
            1: 1.3,
            3: 1.4,
            5: 1.5
        }
    },
    "5102": {
        "A": {
            1: 1.3,
            3: 1.4,
            5: 1.5
        }
    },
    "5201": {
        "A": {
            1: 1.2,
            3: 1.3,
            5: 1.4
        }
    },
    "5021": {
        "A": {
            1: 1.2,
            3: 1.3,
            5: 1.4
        }
    }

}

const tableA = {
    1: [0.9, 1.1, 1.2, 1.6, 2.0, 2.4, 2.7, 3.0, 3.3, 3.8, null, null],
    3: [1.0, 1.3, 1.3, 1.5, 1.8, 2.2, 2.3, 2.8, 2.9, 3.5, null, null],
    5: [0.9, 1.1, 1.2, 1.6, 2.0, 2.4, 2.7, 3.0, null, null, null, null],
    7: [1.0, 1.3, 1.3, 1.5, 1.8, 2.2, 2.3, 2.8, 3.5, 3.5, null, null],
    10: [1.0, 1.3, 1.4, 1.5, 1.9, 2.1, 2.5, 2.7, 3.5, 3.5, null, 4.5]
}

const tableB = {
    A: {
        1: {
            1: 0.3,
            2: 0.3,
            3: 0.3,
            4: 0.1,
            6: 0.4
        },
        2: {
            1: 0.4,
            2: 0.5,
            3: 0.6,
            4: -0.8,
            6: 0.5
        },
        3: {
            1: 0.6,
            2: 0.7,
            3: 0.6,
            4: null,
            6: null,
        },
        4: {
            1: null,
            2: null,
            3: null,
            4: null,
            6: null,
        },
        5: {
            1: null,
            2: null,
            3: null,
            4: null,
            6: null,
        },
        6: {
            1: null,
            2: null,
            3: null,
            4: null,
            6: null,
        }

    },
    B: {
        1: {
            1: 0.2,
            2: 0.2,
            3: 0.2,
            4: -0.2,
            6: 0.3,
        },
        2: {
            1: 0.1,
            2: 0.3,
            3: 0.3,
            4: 0.3,
            6: 0.3,
        },
        3: {
            1: 0.2,
            2: 0.3,
            3: 0.2,
            4: 0.5,
            6: 0,
        },
        4: {
            1: 0.3,
            2: 0.3,
            3: 0.3,
            4: 0.6,
            6: 0.4,
        },
        5: {
            1: 0.4,
            2: 0.4,
            3: 0.5,
            4: 0.8,
            6: 0.5,
        },
        6: {
            1: null,
            2: null,
            3: null,
            4: null,
            6: null,
        }
    },
    C: {
        1: {
            1: 0.1,
            2: 0.1,
            3: 0.1,
            4: -0.3,
            6: 0.1,
        },
        2: {
            1: 0,
            2: 0,
            3: 0,
            4: 0.1,
            6: 0,
        },
        3: {
            1: 0,
            2: 0.1,
            3: 0,
            4: 0.2,
            6: 0.1,
        },
        4: {
            1: 0,
            2: 0,
            3: 0,
            4: 0.3,
            6: 0.2,
        },
        5: {
            1: 0,
            2: 0.1,
            3: 0.2,
            4: 0.4,
            6: 0.3,
        },
        6: {
            1: 0,
            2: null,
            3: null,
            4: null,
            6: null,
        }
    },
    D: {
        1: {
            1: 0.1,
            2: 0.1,
            3: 0.1,
            4: -0.1,
            6: 0,
        },
        2: {
            1: 0,
            2: -0.1,
            3: -0.1,
            4: 0.2,
            6: 0,
        },
        3: {
            1: 0,
            2: -0.1,
            3: -0.2,
            4: 0.4,
            6: 0,
        },
        4: {
            1: 0,
            2: 0,
            3: 0,
            4: null,
            6: null,
        },
        5: {
            1: null,
            2: null,
            3: null,
            4: null,
            6: null,
        },
        6: {
            1: null,
            2: null,
            3: null,
            4: null,
            6: null,
        }
    },
    E: {
        1: {
            1: 0.2,
            2: 0.1,
            3: 0.1,
            4: 0.4,
            6: null,
        },
        2: {
            1: 0.2,
            2: 0.2,
            3: 0.2,
            4: 0.5,
            6: null,
        },
        3: {
            1: 0.3,
            2: 0.3,
            3: 0.3,
            4: 0.7,
            6: null,
        },
        4: {
            1: 0.4,
            2: null,
            3: null,
            4: null,
            6: null,
        },
        5: {
            1: null,
            2: null,
            3: null,
            4: null,
            6: null,
        },
        6: {
            1: null,
            2: null,
            3: null,
            4: null,
            6: null,
        }
    }
}

const tableC = {
    1: [
        { group: 5, subGroup: 1, saults: [1, 2], val: 0.4 },
        { group: 5, subGroup: 1, saults: [3, 4], val: 0.4 },
        { group: 5, subGroup: 1, saults: [5, 5], val: 0.4 },
        { group: 5, subGroup: 1, saults: [6, 7], val: 0.4 },
        { group: 5, subGroup: 2, saults: [1, 2], val: 0.2 },
        { group: 5, subGroup: 2, saults: [3, 4], val: 0.4 },
        { group: 5, subGroup: 2, saults: [5, 5], val: 0 },
        { group: 5, subGroup: 2, saults: [6, 7], val: 0 },
        { group: 5, subGroup: 3, saults: [1, 2], val: 0.2 },
        { group: 5, subGroup: 3, saults: [3, 4], val: 0.4 },
        { group: 5, subGroup: 3, saults: [5, 5], val: 0 },
        { group: 5, subGroup: 3, saults: [6, 7], val: 0 },
        { group: 5, subGroup: 4, saults: [1, 2], val: 0.2 },
        { group: 5, subGroup: 4, saults: [3, 4], val: 0.4 },
        { group: 5, subGroup: 4, saults: [5, 5], val: 0.2 },
        { group: 5, subGroup: 4, saults: [6, 7], val: 0.4 },
        { group: 6, subGroup: 1, saults: [1, 2], val: 0.4 },
        { group: 6, subGroup: 1, saults: [3, 4], val: 0.5 },
        { group: 6, subGroup: 1, saults: [5, 5], val: 0.5 },
        { group: 6, subGroup: 1, saults: [6, 7], val: 0.4 },
        { group: 6, subGroup: 2, saults: [1, 2], val: 0.4 },
        { group: 6, subGroup: 2, saults: [3, 4], val: 0.5 },
        { group: 6, subGroup: 2, saults: [5, 5], val: 0.5 },
        { group: 6, subGroup: 2, saults: [6, 7], val: 0.5 },
        { group: 6, subGroup: 3, saults: [1, 2], val: 0.4 },
        { group: 6, subGroup: 3, saults: [3, 4], val: 0.5 },
        { group: 6, subGroup: 3, saults: [5, 5], val: 0.5 },
        { group: 6, subGroup: 3, saults: [6, 7], val: 0.5 },
    ],
    2: [
        { group: 5, subGroup: 1, saults: [1, 9], val: 0.6 },
        { group: 5, subGroup: 2, saults: [1, 9], val: 0.4 },
        { group: 5, subGroup: 3, saults: [1, 9], val: 0.4 },
        { group: 5, subGroup: 4, saults: [1, 9], val: 0.4 },
        { group: 6, subGroup: 1, saults: [1, 9], val: 1.2 },
        { group: 6, subGroup: 2, saults: [1, 9], val: 1.2 },
        { group: 6, subGroup: 3, saults: [1, 9], val: 1.2 },
    ],
    "3board": [
        { group: 5, subGroup: 1, saults: [1, 4], val: 0.8 },
        { group: 5, subGroup: 1, saults: [5, 7], val: 0.8 },
        { group: 5, subGroup: 2, saults: [1, 4], val: 0.8 },
        { group: 5, subGroup: 2, saults: [5, 7], val: 0.7 },
        { group: 5, subGroup: 3, saults: [1, 4], val: 0.8 },
        { group: 5, subGroup: 3, saults: [5, 7], val: 0.6 },
        { group: 5, subGroup: 4, saults: [1, 4], val: 0.8 },
        { group: 5, subGroup: 4, saults: [5, 7], val: 0.8 },
    ],
    "3plat": [
        { group: 5, subGroup: 1, saults: [1, 4], val: 0.8 },
        { group: 5, subGroup: 1, saults: [5, 7], val: 0.8 },
        { group: 5, subGroup: 2, saults: [1, 4], val: 0.8 },
        { group: 5, subGroup: 2, saults: [5, 7], val: 0.6 },
        { group: 5, subGroup: 3, saults: [1, 4], val: 0.8 },
        { group: 5, subGroup: 3, saults: [5, 7], val: 0.6 },
        { group: 5, subGroup: 4, saults: [1, 4], val: 0.8 },
        { group: 5, subGroup: 4, saults: [5, 7], val: 0.8 },
        { group: 6, subGroup: 1, saults: [1, 4], val: 1.3 },
        { group: 6, subGroup: 1, saults: [5, 7], val: 1.3 },
        { group: 6, subGroup: 2, saults: [1, 4], val: 1.3 },
        { group: 6, subGroup: 2, saults: [5, 7], val: 1.3 },
        { group: 6, subGroup: 3, saults: [1, 4], val: 1.3 },
        { group: 6, subGroup: 3, saults: [5, 7], val: 1.3 },
    ],
    4: [
        { group: 5, subGroup: 1, saults: [1, 9], val: 1.0 },
        { group: 5, subGroup: 2, saults: [1, 9], val: 0.8 },
        { group: 5, subGroup: 3, saults: [1, 9], val: 0.8 },
        { group: 5, subGroup: 4, saults: [1, 9], val: 0.8 },
        { group: 6, subGroup: 1, saults: [1, 9], val: 1.5 },
        { group: 6, subGroup: 2, saults: [1, 9], val: 1.3 },
        { group: 6, subGroup: 3, saults: [1, 9], val: 1.3 },
    ],
    "5board": [
        { group: 5, subGroup: 1, saults: [1, 4], val: 1.2 },
        { group: 5, subGroup: 1, saults: [5, 7], val: 1.2 },
        { group: 5, subGroup: 2, saults: [1, 4], val: 1.2 },
        { group: 5, subGroup: 2, saults: [5, 7], val: 1.1 },
        { group: 5, subGroup: 3, saults: [1, 4], val: 1.2 },
        { group: 5, subGroup: 3, saults: [5, 7], val: 1.0 },
        { group: 5, subGroup: 4, saults: [1, 4], val: 1.2 },
        { group: 5, subGroup: 4, saults: [5, 7], val: 1.2 },
        { group: 6, subGroup: 1, saults: [1, 4], val: 1.7 },
        { group: 6, subGroup: 1, saults: [5, 7], val: 1.7 },
        { group: 6, subGroup: 2, saults: [1, 4], val: 1.7 },
        { group: 6, subGroup: 2, saults: [5, 7], val: 1.7 },
        { group: 6, subGroup: 3, saults: [1, 4], val: 1.7 },
        { group: 6, subGroup: 3, saults: [5, 7], val: 1.7 },
    ],
    "5plat": [
        { group: 5, subGroup: 1, saults: [1, 4], val: 1.2 },
        { group: 5, subGroup: 1, saults: [5, 7], val: 1.2 },
        { group: 5, subGroup: 2, saults: [1, 4], val: 1.2 },
        { group: 5, subGroup: 2, saults: [5, 7], val: 1.0 },
        { group: 5, subGroup: 3, saults: [1, 4], val: 1.2 },
        { group: 5, subGroup: 3, saults: [5, 7], val: 1.0 },
        { group: 5, subGroup: 4, saults: [1, 4], val: 1.2 },
        { group: 5, subGroup: 4, saults: [5, 7], val: 1.2 },
        { group: 6, subGroup: 1, saults: [1, 4], val: 1.7 },
        { group: 6, subGroup: 1, saults: [5, 7], val: 1.7 },
        { group: 6, subGroup: 2, saults: [1, 4], val: 1.7 },
        { group: 6, subGroup: 2, saults: [5, 7], val: 1.7 },
        { group: 6, subGroup: 3, saults: [1, 4], val: 1.7 },
        { group: 6, subGroup: 3, saults: [5, 7], val: 1.7 },
    ],
    6: [
        { group: 5, subGroup: 1, saults: [1, 9], val: 1.5 },
        { group: 5, subGroup: 2, saults: [1, 9], val: 1.4 },
        { group: 5, subGroup: 3, saults: [1, 9], val: 1.4 },
        { group: 5, subGroup: 4, saults: [1, 9], val: 1.5 },
        { group: 6, subGroup: 1, saults: [1, 9], val: 1.9 },
        { group: 6, subGroup: 2, saults: [1, 9], val: 1.9 },
        { group: 6, subGroup: 3, saults: [1, 9], val: 1.9 },
    ],
    "7board": [
        { group: 5, subGroup: 1, saults: [1, 9], val: 1.6 },
        { group: 5, subGroup: 2, saults: [1, 9], val: 1.7 },
        { group: 5, subGroup: 3, saults: [1, 9], val: 1.8 },
        { group: 5, subGroup: 4, saults: [1, 9], val: 1.6 },
    ],
    "7plat": [
        { group: 5, subGroup: 1, saults: [1, 4], val: 1.6 },
        { group: 5, subGroup: 1, saults: [5, 9], val: 1.6 },
        { group: 5, subGroup: 2, saults: [1, 4], val: 1.7 },
        { group: 5, subGroup: 2, saults: [5, 9], val: 1.5 },
        { group: 5, subGroup: 3, saults: [1, 4], val: 1.7 },
        { group: 5, subGroup: 3, saults: [5, 9], val: 1.5 },
        { group: 5, subGroup: 4, saults: [1, 4], val: 1.6 },
        { group: 5, subGroup: 4, saults: [5, 9], val: 1.6 },
        { group: 6, subGroup: 1, saults: [1, 4], val: 2.1 },
        { group: 6, subGroup: 1, saults: [5, 9], val: 2.1 },
        { group: 6, subGroup: 2, saults: [1, 4], val: 2.1 },
        { group: 6, subGroup: 2, saults: [5, 9], val: 2.1 },
        { group: 6, subGroup: 3, saults: [1, 4], val: 2.1 },
        { group: 6, subGroup: 3, saults: [5, 9], val: 2.1 },
    ],
    8: [
        { group: 5, subGroup: 1, saults: [1, 9], val: 1.9 },
        { group: 5, subGroup: 2, saults: [1, 9], val: 1.8 },
        { group: 5, subGroup: 3, saults: [1, 9], val: 1.8 },
        { group: 5, subGroup: 4, saults: [1, 9], val: 1.9 },
        { group: 6, subGroup: 1, saults: [1, 9], val: 2.3 },
        { group: 6, subGroup: 2, saults: [1, 9], val: 2.3 },
        { group: 6, subGroup: 3, saults: [1, 9], val: 2.3 },
    ],
    "9board": [
        { group: 5, subGroup: 1, saults: [1, 9], val: 2.0 },
        { group: 5, subGroup: 2, saults: [1, 9], val: 2.1 },
        { group: 5, subGroup: 3, saults: [1, 9], val: 2.1 },
        { group: 5, subGroup: 4, saults: [1, 9], val: 2.0 },
    ],
    "9plat": [
        { group: 5, subGroup: 1, saults: [1, 4], val: 2.0 },
        { group: 5, subGroup: 1, saults: [5, 9], val: 2.0 },
        { group: 5, subGroup: 2, saults: [1, 4], val: 2.1 },
        { group: 5, subGroup: 2, saults: [5, 9], val: 1.9 },
        { group: 5, subGroup: 3, saults: [1, 4], val: 2.1 },
        { group: 5, subGroup: 3, saults: [5, 9], val: 1.9 },
        { group: 5, subGroup: 4, saults: [1, 4], val: 2.0 },
        { group: 5, subGroup: 4, saults: [5, 9], val: 2.0 },
        { group: 6, subGroup: 1, saults: [1, 4], val: 2.5 },
        { group: 6, subGroup: 1, saults: [5, 9], val: 2.5 },
        { group: 6, subGroup: 2, saults: [1, 4], val: 2.5 },
        { group: 6, subGroup: 2, saults: [5, 9], val: 2.5 },
        { group: 6, subGroup: 3, saults: [1, 4], val: 2.5 },
        { group: 6, subGroup: 3, saults: [5, 9], val: 2.5 },
    ],
}

const tableD = {
    1: {
        1: {
            valLow: 0,
            valHigh: 0.5,
            saultForHigh: 8
        },
        3:
        {
            valLow: 0,
            valHigh: 0.3,
            saultForHigh: 8
        },
        5:
        {
            valLow: 0,
            valHigh: 0.5,
            saultForHigh: 8
        },
        7:
        {
            valLow: 0,
            valHigh: 0.3,
            saultForHigh: 8
        },
        10:
        {
            valLow: 0,
            valHigh: 0.2,
            saultForHigh: 8
        }
    },
    2: {
        1: {
            valLow: 0.2,
            valHigh: 0.6,
            saultForHigh: 7
        },
        3:
        {
            valLow: 0.2,
            valHigh: 0.4,
            saultForHigh: 7
        },
        5:
        {
            valLow: 0.2,
            valHigh: 0.5,
            saultForHigh: 7
        },
        7:
        {
            valLow: 0.2,
            valHigh: 0.3,
            saultForHigh: 7
        },
        10:
        {
            valLow: 0.2,
            valHigh: 0.2,
            saultForHigh: 7
        }
    },
    3: {
        1: {
            valLow: 0.3,
            valHigh: 0.5,
            saultForHigh: 7
        },
        3:
        {
            valLow: 0.3,
            valHigh: 0.3,
            saultForHigh: 7
        },
        5:
        {
            valLow: 0.3,
            valHigh: 0.6,
            saultForHigh: 7
        },
        7:
        {
            valLow: 0.3,
            valHigh: 0.4,
            saultForHigh: 7
        },
        10:
        {
            valLow: 0.3,
            valHigh: 0.3,
            saultForHigh: 7
        }
    },
    4: {
        1: {
            valLow: 0.6,
            valHigh: 0.5,
            saultForHigh: 3
        },
        3:
        {
            valLow: 0.3,
            valHigh: 0.3,
            saultForHigh: 3
        },
        5:
        {
            valLow: 0.6,
            valHigh: 0.5,
            saultForHigh: 3
        },
        7:
        {
            valLow: 0.3,
            valHigh: 0.3,
            saultForHigh: 3
        },
        10:
        {
            valLow: 0.3,
            valHigh: 0.2,
            saultForHigh: 3
        }
    }
}

export const getDDJunior = (dive: string, height: number, pos: Position) => {
    if (!juniorTable[dive]) {
        return false
    }
    if (!juniorTable[dive][pos]) {
        return null
    }
    return juniorTable[dive][pos][height] //* 100
}

// calculate FINE Degree of Difficulty
export const getDD = (dive: string, height: number, pos: Position) => {
    let group = parseInt(dive[0])
    let subgroup: number | null = null;
    let isWithTwists = (group === 5 || (group === 6 && dive.length === 4));
    if (pos == "D" && !isWithTwists) return null
    if (group === 6 && height < 5) return null
    if (group === 5 || group === 6) {
        subgroup = parseInt(dive[1])
    }
    let saults = (!isWithTwists && dive.length === 4) ? parseInt(dive.substring(2)) : parseInt(dive[2])
    let a = getDDA(height, saults)
    let b = getDDB(pos, (group === 5) ? subgroup : group, saults, height)
    if (group < 5) {
        let isFlying = parseInt(dive[1]) === 1
        if (isFlying) {
            if (pos === "A") return null
            b += getDDB("E", group, saults, height)
        }
    }
    let c = 0
    if (isWithTwists) {
        let twists = parseInt(dive[3])
        c = getDDC(twists, saults, group, subgroup, pos, height >= 5);
    }
    let d = 0;
    if (group === 6) {
        if (!isWithTwists) {
            d = getDDDArmstand(subgroup, saults)
        }
    } else {
        d = getDDD(subgroup ? subgroup : group, height, saults)
    }
    let e = isWithTwists ? 0 : getDDE(group, saults, height >= 5, subgroup)
    console.log(`${a}, ${b}, ${c}, ${d}, ${e}`)
    if (a === null || b === null || c === null || d === null || e === null) return null
    let dd = (a + b + c + d + e)
    return Math.round((dd + Number.EPSILON) * 100) / 100
}

const getDDA = (height: number, saults: number) => {
    return tableA[height][saults]
}

const getDDB = (pos: Position, group: number, saults: number, height: number) => {
    let saultIndex;
    if (height >= 5 && saults >= 8 && group === 3) {
        switch (pos) {
            case "C":
                return 0.3
            case "B":
                return 0.6
            default: return null
        }
    }
    if (height >= 5 && saults >= 8 && group === 4) {
        switch (pos) {
            case "C":
                return 0.4
            case "B":
                return 0.7
            default: return null
        }
    }
    switch (saults) {
        case 0:
            saultIndex = 1
            break;
        case 1:
            saultIndex = 1
            break;
        case 2:
            saultIndex = 1
            break;
        case 3:
            saultIndex = 2
            break;
        case 4:
            saultIndex = 2
            break;
        case 5:
            saultIndex = 3
            break;
        case 6:
            saultIndex = 4
            break;
        case 7:
            saultIndex = 4
            break;
        case 8:
            saultIndex = 5
            break;
        case 9:
            saultIndex = 5
            break;
        case 10:
            saultIndex = 6
            break;
        case 11:
            saultIndex = 6
            break;
    }
    if (tableB[pos] == null || tableB[pos][saultIndex] == null || tableB[pos][saultIndex][group] == null) return null
    return tableB[pos][saultIndex][group]
}

const getDDC = (twists: number, saults: number, group: number, subGroup: number, pos: Position, isPlatform: boolean) => {
    if (saults === 1 && (pos !== "A" && pos !== "B" && pos !== "C")) {
        return null;
    }
    if ((saults >= 2 && saults <= 3) && (pos !== "D")) {
        return null;
    }
    if (saults > 4 && (pos !== "B" && pos !== "C")) {
        return null;
    }
    if (group === 6 && saults >= 2 && saults <= 4 && twists >= 2 && pos !== "D") {
        return null
    }
    if (group === 6 && saults >= 5 && (pos !== "B" && pos !== "C")) {
        return null;
    }
    let twistIndex = ([3, 5, 7, 9].findIndex(i => i === twists) >= 0) ? (isPlatform ? `${twists}plat` : `${twists}board`) : twists
    for (let c of tableC[twistIndex]) {
        if (group === c.group && subGroup === c.subGroup && saults >= c.saults[0] && saults <= c.saults[1]) {
            let res = c.val
            return res
        }
    }
}

const getDDD = (group: number, height: number, saults: number) => {
    if (height >= 5 && group === 3 && saults >= 5 && saults <= 6) return 0.4 // workaround because table difference for springboard and platform
    if (!tableD[group]) return null
    let resD = tableD[group][height];
    if (saults >= resD.saultForHigh) return resD.valHigh
    return resD.valLow
}

const getDDDArmstand = (subgroup: number, saults: number) => {
    switch (subgroup) {
        case 0:
            if (saults <= 4) return 0.2
            return 0.4
        case 1:
            if (saults <= 4) return 0.2
            return 0.4
        case 2:
            if (saults <= 1) return 0.2
            return 0.4
        case 3:
            if (saults <= 1) return 0.3
            return 0.5
    }
}

const getDDE = (group: number, saults: number, isPlatform: boolean, subGroup: number | null) => {
    let valD = 0
    if (group === 1 || group === 4) {
        switch (saults) {
            case 2: valD = 0.1
                break;
            case 4: valD = 0.2
                break;
            case 6: valD = 0.2
                break;
            case 8: valD = isPlatform ? 0 : 0.2
                break;
        }
    }
    if (group === 2 || group === 3) {
        switch (saults) {
            case 1: valD = 0.1
                break;
            case 3: valD = 0.2
                break;
            case 5: valD = 0.3
                break;
            case 7: valD = 0.4
                break;
            case 9: valD = 0.4
                break;
        }
    }
    if (group === 6 && (subGroup === 2 || subGroup === 3)) {
        switch (saults) {
            case 2: valD = 0.1
                break;
            case 4: valD = 0.2
                break;
            case 6: valD = 0.2
                break;
            case 8: valD = 0.3
                break;
        }
    }
    if (group === 6 && subGroup === 1) {
        switch (saults) {
            case 1: valD = 0.1
                break;
            case 3: valD = 0.2
                break;
            case 5: valD = 0.3
                break;
            case 7: valD = 0.4
                break;
            case 9: valD = 0.4
                break;
        }
    }
    return valD
}