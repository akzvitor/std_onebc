/**
 * param is a function's input
 * it's like a variable that is available inside the function's scope
 * it needs to be informed during a function call
 */
function double(x) { //in this function, the param is x
    alert("O dobro de " + x + " é " + (x * 2)) //x is used here
}

double(26) // x is informed here
double() // if the param isn't informed, the default value will be undefined

/**
 * a default value can be defined for a param
 * it will be used when a value isn't provided
 */
function sayHello(name = "world") {
    alert("Hello, " + name + "!")
}

sayHello("Vitor") // the result will be Hello, Vitor
sayHello() // the result will be Hello, World

/**
 * a function can have many params
 */
function sum(a, b) {
    alert("O resultado da soma é " + (a + b))
}

sum(4, 6)

/**
 * the params order is important
 * when calling the function, they must be entered in the same order as they were defined
 * params with provided default values should be defined last
 */
function createUser(name, email, password, type = "admin") {
    const user = {
        name, // same as name: name
        email, // same as email: email
        password, //same as password: password
        type // same as type: type
    }

    console.log(user)
}

createUser("Vitor", "vitor@email.com", 524734534) // right order
createUser("vitor@email.com", "Vitor", 524734534) // wrong order

function newUser(name, type = "admin", email, password){ // wrong way to define the params
    const user = {
        name, 
        email, 
        password,
        type 
    }

    console.log(user)
}

/**
 * when a function has several params, a good practice is to replace them with an object
 */
function multipleParams(name, phone, address, birthday, email, password) {

}

function objectAsParam(user) {
    user.name
    user.email
}

const userData = {
    name: "",
    phone: "",
    email: "",
    password: "",
    address: "",
    birthday: ""
}

objectAsParam(userData)