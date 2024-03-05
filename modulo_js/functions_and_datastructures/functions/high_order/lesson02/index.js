const characters = [
    { level: 42, name: "Thrall", race: "Orc", class: "Xamã" },
    { level: 28, name: "Garrosh", race: "Orc", class: "Guerreiro" },
    { level: 35, name: "Varok", race: "Orc", class: "Guerreiro" },
    { level: 35, name: "Uther", race: "Humano", class: "Paladino" },
    { level: 26, name: "Jaina", race: "Humano", class: "Maga" },
    { level: 39, name: "Tyrande", race: "Elfo Noturno", class: "Sacerdotisa" },
    { level: 29, name: "Muradin", race: "Anão", class: "Guerreiro" },
]

// Map

/**
 * creates a new array, so doesn't change the original array
 * this method allows to obtain a new array from an existing array
 * has the same functionality as the following algorithm:
 *  
const names = []

for (let i = 0; i < characters.length; i++) {
    names.push(characters[i].name)
} 
 *
 */

const names = characters.map(function (character) {
    return character.name
})

console.log(names)

// Filter

/**
 * creates a new array, so doesn't change the original array
 * allows to obtain a new array containing only specific elements from an existing array
 * has the same functionality as the following algorithm:
 * 
const orcs = []

for (let i = 0; i < characters.lenght; i++) {
    if (characters[i].race === "Orc") {
        orcs.push(characters[i])
    }
}
 */

const orcs = characters.filter(function (character) {
    return character.race === "Orc"
})

console.log(orcs)

// Reduce

/**
 * 
 */

const totalLevel = characters.reduce(function (accumulatedValue, character) {
    return accumulatedValue + character.level
}, 0)

console.log(totalLevel)

const races = characters.reduce(function (accumulatedValue, character) {
    if (accumulatedValue[character.race]) {
        accumulatedValue[character.race].push(character)
    } else {
        accumulatedValue[character.race] = [character]
    }

    return accumulatedValue
}, {})

console.log(races)

// Sort

/**
 * orders the elements of an array based on comparisons between pairs of elements
 * changes the original array
 */

characters.sort(function (a, b) {
    return a.level - b.level
})

console.log(characters)

// tip to don't change the original array: use the slice method
const charactersOrderedByLevel = characters.slice().sort(function (a, b) {
    return a.level - b.level
})

console.log(charactersOrderedByLevel)