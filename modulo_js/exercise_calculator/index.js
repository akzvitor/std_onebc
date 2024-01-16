const firstNum = parseFloat(prompt("Insira o primeiro número: "))
const secondNum = parseFloat(prompt("Insira o segundo número: "))
const sum = firstNum + secondNum
const subtraction = firstNum - secondNum
const multiplication = firstNum * secondNum
const division = firstNum / secondNum

alert(
    "A soma entre " + firstNum + " e " + secondNum + " é igual a " + sum +
    "\nA subtração entre " + firstNum + " e " + secondNum + " é igual a " + subtraction +
    "\nA multiplicação entre " + firstNum + " e " + secondNum + " é igual a " + multiplication +
    "\nA divisão entre " + firstNum + " e " + secondNum + " é igual a " + division
)