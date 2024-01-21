let word = prompt("Insira uma palavra, verificaremos se é um palíndromo ou não: ")
let backwardsWord = ""

for (let i = word.length; i > 0; i--) {
    backwardsWord += word[i - 1]
}

if (backwardsWord == word) {
    alert(word + " é um palíndromo!")
} else {
    alert(word + " não é um palíndromo! " + word + " ao contrário é " + backwardsWord)
}