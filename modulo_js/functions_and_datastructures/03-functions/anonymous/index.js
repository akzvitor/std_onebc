/**
 * functions can be assigned to variables as if they were values
 */
function sum(a, b) {
    return a + b
}

// the parentesis aren't used before the funciton, because it's not a function call
let operation = sum

console.log(operation(4, 5))

/**
 * anonymoys functions are nothing more than nameless functions
 */
operation = function (a, b) {
    return a - b
}

console.log(operation(36, 13))


/**
 * anonymous functions can only be called after the variable assingnment
 */
helloWorld()
// error
hiWorld()

function helloWorld() {
    console.log("Olá, mundo!")
}

const hiWorld = function () {
    console.log("Oi, mundo!")
}

// success
hiWorld()