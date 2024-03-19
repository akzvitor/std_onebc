/**
 * methods are functions declared in the context of an object
 */
let person = {
    name: "Vitor",
    age: 20,
    sayHello() {
        console.log("Hello, world! My name is " + this.name) // "this" is used when reference an object property in it's own context
    }
}

console.log(person)

person.sayHello() // method call