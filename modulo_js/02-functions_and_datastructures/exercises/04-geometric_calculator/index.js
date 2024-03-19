function triangleArea(base, height) {
    return ((base * height) / 2)
}

function rectangleArea(base, height) {
    return (base * height)
}

function squareArea(side) {
    return (side * side)
}

function trapezeArea(largerBase, smallerBase, height) {
    return ((largerBase + smallerBase) * height / 2) 
}

function circleArea(radius) {
    return (3.14 * (radius * radius))
}

function menu() {
    return parseFloat(prompt(
        "--------------- Calculadora Geométrica ---------------" +
        "\n\nSelecione uma forma geométrica para calcular a área" +
        "\n1 - Triângulo" +
        "\n2 - Retângulo" +
        "\n3 - Quadrado" +
        "\n4 - Trapézio" +
        "\n5 - Círculo" +
        "\n6 - Sair"
    ))
}

function execute() {
    let option = 0

    do {
        option = menu()

        switch (option) {
            case 1:
                const triangleBase = parseFloat(prompt("Informe o valor da base do triângulo:"))
                const triangleHeight = parseFloat(prompt("Agora informe o valor da altura do triângulo:"))

                alert(triangleArea(triangleBase, triangleHeight))
                break
            case 2:
                const rectangleBase = parseFloat(prompt("Informe o valor da base do retângulo:"))
                const rectangleHeight = parseFloat(prompt("Agora informe o valor da altura do retângulo:"))

                alert(rectangleArea(rectangleBase, rectangleHeight))
                break
            case 3:
                const squareSide = parseFloat(prompt("Informe o valor do lado do quadrado:"))

                alert(squareArea(squareSide))
                break
            case 4:
                const trapezeLargerBase = parseFloat(prompt("Informe o valor da base maior do trapézio:"))
                const trapezeSmallerBase = parseFloat(prompt("Agora informe o valor da base menor do trapézio:"))
                const trapezeHeight = parseFloat(prompt("Por último, informe o valor da altura do trapézio:"))

                alert(trapezeArea(trapezeLargerBase, trapezeSmallerBase, trapezeHeight))
                break
            case 5:
                const circleRadius = parseFloat(prompt("Informe o valor do raio do círculo (metade do diâmetro):"))

                alert(circleArea(circleRadius))
                break
            case 6:
                alert("Encerrando...")
                break
            default:
                alert("Opção inválida.")
                break
        }
    } while (option !== 6)
}

execute()