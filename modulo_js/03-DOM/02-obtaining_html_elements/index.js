/**
 * DOM allows to read specific elements of the html in different ways
 */

function show() {
    // get just one element by the specified ID
    const contactList = document.getElementById('contact-list')
    console.log(contactList)

    // get all elements of the specified HTML tag, in this case, 'li' elements
    // HTMLCollection format
    const listElements = document.getElementsByTagName('li')
    console.log(listElements)

    // get all elements of the specified class
    // HTMLCollection format
    const contactInputs = document.getElementsByClassName('contact-input')
    console.log(contactInputs)

    // get the selected elements in a NodeList format
    // this method uses the selector the same way as css
    const contacts = document.querySelectorAll('#contact-list > li > label')
    console.log(contacts)

    // get all elements that have the specified name
    // NodeList format
    const contact1 = document.getElementsByName('contact1')
    console.log(contact1)

    // get just one selected element
    // this method also uses the selector the same way as css
    const firstContact = document.querySelector('#contact-list > li > label')
    console.log(firstContact)
}