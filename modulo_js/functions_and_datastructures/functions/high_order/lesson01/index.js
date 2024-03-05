/**
 * high order functions
 * functions that receive another functions as a param
 */
function calculate(a, b, operation) {
    console.log("Realizando uma operação.")
    const result = operation(a, b)
    return result
}

function sum(x, y) {
    console.log("Realizando uma soma.")
    return x + y
}

console.log(calculate(3, 5, sum))

// anonymous function as a param
console.log(calculate(8, 4, function (x, y) {
    console.log("Realizando uma subtração.")
    return x - y
}))

/**
 * the "param functions" are called callbacks
 * a common example of high order function is the forEach array method
 */
function showElement(element, index, array) {
    console.log({
        element,
        index,
        array
    })
}

const list = ["Maçã", "Banana", "Laranja", "Limão"]

// traditional way
for (let i = 0; i < list.length; i++) {
    showElement(list[i], i, list)
}

// functional and practical way
list.forEach(showElement)

// can be done this way, using anonymous function
list.forEach(function(element, index, array) {
    console.log({
        element,
        index,
        array
    })
})