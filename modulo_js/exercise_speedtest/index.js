const vehicle1 = prompt("Insira o nome do primeiro veículo: ")
const speedv1 =  parseFloat(prompt("Insira a velocidade em km/h do primeiro veículo: "))
const vehicle2 = prompt("Insira o nome do segundo veículo: ")
const speedv2 =  parseFloat(prompt("Insira a velocidade em km/h do segundo veículo: ")) 

if (speedv1 > speedv2) {
    alert(vehicle1 + " é mais rápido que " + vehicle2)
} else if (speedv1 < speedv2) {
    alert(vehicle2 + " é mais rápido que " + vehicle1)
} else {
    alert("A velocidade dos veículos é a mesma.")
}