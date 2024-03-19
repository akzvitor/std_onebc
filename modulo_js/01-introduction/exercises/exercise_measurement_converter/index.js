let valueInMeters = parseFloat(prompt("Insira um valor em metros: "))
let choice = parseFloat(prompt(
    "Agora escolha a medida para qual deseja converter:" +
    "\n1 - Milímetros (mm)" +
    "\n2- Centímetros (cm)" +
    "\n3 - Decímetros (dm)" +
    "\n4 - Decâmetros (dam)" +
    "\n5 - Hectômetros (hm)" +
    "\n6 - Quilômteros(km)"
))
let convertedValue = 0

switch (choice) {
    case 1:
        convertedValue = valueInMeters * 1000
        alert(valueInMeters + " metros é igual a " + convertedValue + " milímetros.")
        break
    case 2:
        convertedValue = valueInMeters * 100
        alert(valueInMeters + " metros é igual a " + convertedValue + " centímetros.")
        break
    case 3:
        convertedValue = valueInMeters * 10
        alert(valueInMeters + " metros é igual a " + convertedValue + " decímetros.")
        break
    case 4:
        convertedValue = valueInMeters / 10
        alert(valueInMeters + " metros é igual a " + convertedValue + " decâmetros.")
        break
    case 5:
        convertedValue = valueInMeters / 100
        alert(valueInMeters + " metros é igual a " + convertedValue + " hectômetros.")
        break
    case 6:
        convertedValue = valueInMeters / 1000
        alert(valueInMeters + " metros é igual a " + convertedValue + " quilômetros.")
        break
    default:
        alert("Opção inválida!")
}