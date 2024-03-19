// arrays can receive any type of data, other arrays included
const arr = [
    "1º Nível",
    ["2º nível", 42, true],
    [
        ["3º nível, 1º item", "Olá, mundo!"],
        ["3º nível, 2º item", "Oi, mundo!"],
    ],
    []
]

/**
 * arrays can have multiple dimensions
 * each pair of brackets references an innermost level of the array
 */
console.log(arr[0])       // return: '1º Nível'
console.log(arr[1])       // return: [ '2º nível', 42, true ]
console.log(arr[1][0])    // return: '2º nível'
console.log(arr[1][1])    // return: 42
console.log(arr[2])       // return: [ [ '3º nível, 1º item', 'Olá, mundo!' ], [ '3º nível, 2º item', 'Oi, mundo!' ] ]
console.log(arr[2][0])    // return: [ '3º nível, 1º item', 'Olá, mundo!' ]
console.log(arr[2][1][1]) // return: 'Oi, mundo!'

/**
 * matrices (two-dimensional arrays)
 * a matrix structure can be clearly represented as a table
 */
const matriz = [
    ["l1, c1", "l1, c2", "l1, c3", "l1, c4"],
    ["l2, c1", "l2, c2", "l2, c3", "l2, c4"],
    ["l3, c1", "l3, c2", "l3, c3", "l3, c4"],
]
console.table(matriz)

/**
 * iterating over an multiple dimensional array
 * use various for loop levels to iterate
 */
for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz[i].length; j++) {
        const elemento = matriz[i][j]
        console.log("Posição: (" + i + ", " + j + ") Valor: " + elemento)
    }
}