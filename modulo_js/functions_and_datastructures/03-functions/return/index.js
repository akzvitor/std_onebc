/**
 * return is a function's output
 * it's used to store the output of the function in a variable
 * if the return isn't provided, the output will be undefined
 */
function calculateAverage(a, b) {
    const average = (a + b) / 2

    return average
}

const average = calculateAverage(68, 31) // here the variable average receive the function's returned value ((a +b)/2)

console.log(average)

function createProduct(name, price) {
    const product = {
        name,
        price,
        stock: 1
    }

    return product
}

const notebook = createProduct("Notebook Acer Nitro 5", 3200)

console.log(notebook)
console.log(createProduct("TV Samsung 4K 80 polegadas", 7800)) //the return of a function can be used directly as a value

/**
 * the return can be any expression or return from another function
 */
function rectangleArea(base, height) {
    return base * height
}

console.log(rectangleArea(3, 5))

function squareArea(side) {
    return rectangleArea(side, side)
}

console.log(squareArea(9))

/**
 * a function can return only once
 */
function hello() {
    let text = "haah"
    return text
    text = "Hello, world"
    console.log(text)
}

console.log(hello())

function majority(age) {
    if (age >= 18) {
        return "Maior de idade"
    }
    else {
        return "Menor de idade"
    }
}

console.log(majority(27))
console.log(majority(14))