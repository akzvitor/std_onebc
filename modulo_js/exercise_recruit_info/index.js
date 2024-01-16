const firstName = prompt("Insira seu primeiro nome: ")
const lastName = prompt("Insira seu sobrenome: ")
const studyField = prompt("Qual seu campo de estudo? ")
const birthYear = prompt("Insira seu ano de nascimento: ")
const age = 2024 - birthYear

console.log(firstName)
console.log(lastName)
console.log(studyField)
console.log(age)

alert(
    "Recruta cadastrado com sucesso!\n" +
    "\nNome completo: " + firstName + " " + lastName +
    "\nCampo de estudo: " + studyField +
    "\nIdade: " + age
)