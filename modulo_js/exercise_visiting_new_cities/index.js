const touristName = prompt("Qual seu nome? ")
let firstAsk = prompt("Você já visitou alguma cidade? (S/N)")
let citiesNames
let count = 0

if (firstAsk === "S") {
    count += 1
    citiesNames = prompt("Qual o nome da cidade? ")
} else {
    alert("Ok, obrigado por responder!")
}

let secondAsk = prompt("Você já visitou alguma outra cidade? (S/N)")
while (secondAsk === "S") {
    count ++
    citiesNames = citiesNames + ", " + prompt("Qual o nome? ")
    secondAsk = prompt("Você já visitou alguma outra cidade? (S/N)")
}

alert(
    "Uau, " + touristName +"! Você já visitou " + count + " cidade(s)! Sendo elas: " + citiesNames
    )