function normalSum(a, b) {
    return a + b
}
console.log(`Normal sum: ${normalSum(2, 2)}`)

const anonymousSum = function (a, b) {
    return a + b
}
console.log(`Anonymous sum: ${anonymousSum(2, 2)}`)

const arrowSum = (a, b) => {
    return a+ b
}
console.log(`Arrow function sum: ${arrowSum(2, 2)}`)

const subtract = (a, b) => a - b
console.log(`Subtraction: ${subtract(5, 2)}`)

const double = n => `The double of ${n} is ${n * 2}`
const number = 21
console.log(double(number))

const towns = ['Prontera', 'Izlude', 'Payon', 'Alberta', 'Geffen', 'Morroc']
const startingWithP = towns.filter(town => town[0] === 'P')
console.log(startingWithP)