// initializing an array with some defined elements
const arr = ["Frodo", "Sam", "Merry", "Pippin", "Gandalf", "Aragorn", "Legolas", "Gimli"]

// Add elements
/**
 * push
 * this function adds the element to the end of the array
 * also returns the size of the array
 * can be useful when you dont know the size of the array, for example
 */
let arrSize = arr.push("Boromir")
console.log(arr)
console.log(arrSize)

/**
 * unshift
 * adds element to the beginning of the array 
 * also returns the element of the array
 */
arrSize = arr.unshift("Boromir")
console.log(arr)
console.log(arrSize)

// Remove elements
/**
 * pop
 * return and remove the last element of the array
 */
const lastElement = arr.pop()
console.log(arr)
console.log(lastElement)

/**
 * shift
 * return and remove the first element of the array
 */
const firstElement = arr.shift()
console.log(arr)
console.log(firstElement)

// Search for elements
/**
 * includes
 * checks if the element exists in the array
 * return true or false
 */
const include = arr.includes("Gandalf")
console.log(include)

/**
 * indexOf
 * return the index of the element
 */
const index = arr.indexOf("Gandalf")
console.log(index)

// Slice and concatenate
/**
 * slice
 * copies the array elements that are between the specified indexes
 */
const hobbits = arr.slice(0, 4)
const others = arr.slice(-4)
console.log(arr)
console.log(hobbits)
console.log(others)

/**
 * concat
 * joins all the given elements into a new array
 * in this example, hobbits is the base array and it's concatenated with the array others and the element Boromir
 */
const society = hobbits.concat(others, "Boromir")
console.log(society)

// Replace elements
/**
 * splice
 * remove the specified elements, return it in an array and replace it with the provided elements
 * the params are, in order: initial index, how many elemens from the index and wich elements to replace with
 */
const removedElements = society.splice(4, 1, "Gandalf the Gray")
console.log(society)
console.log(removedElements)

// Iterate over array elements
for (let i = 0; i < society.length; i++) {
    const element = society[i]
    console.log(element + " se encontra na posição " + i)
}