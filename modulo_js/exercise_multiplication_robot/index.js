let askedNumber = parseFloat(prompt("Escolha um número para exibirmos sua tabuada: "))
let table = ""

for (let i = 1; i <= 20; i ++) {
    table += askedNumber + " x " + i + " = " + askedNumber * i + "\n"
}

alert(table)