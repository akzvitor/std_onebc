/**
 * recursive functions are functions that call themselves repeatedly
 */
function divide(num) {
    console.log(num)
    if (num % 2 === 0) {
        divide(num / 2) 
    }
    else {
        return num
    }
}

divide(256)

/**
 * the recursive function must have a way to stop calling itself
 * if that's not the case, it'll call itself infinitely 
 */
function double(num) {
    console.log(num)
    double(num * 2)
}

// double (1)

/**
 * to develop a recursive function, is common to start from a base case 
 * this ensures that the function won't keep calling itself forever
 */
function factorial(num) {
    console.log("Número: " + num)
    if (num === 0) {
        return 1
    }
    else if (num === 1) {
        return 1
    }
    else {
        console.log(num + "* !" + (num - 1))
        return num * factorial(num - 1)
    }
}

console.log(factorial(5))