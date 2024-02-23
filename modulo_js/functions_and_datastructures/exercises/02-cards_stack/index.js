let cards = ["7 de copas", "2 de ouro", "Rei de copas"]
let option = 0

do {
    option = parseFloat(prompt(
        "Seja bem vindo ao sistema Simulador de Baralho!" +
        "\n\nExistem " + cards.length + " cartas no baralho neste momento." +
        "\n\nSelecione uma opção:" +
        "\n1 - Adicionar uma carta" +
        "\n2 - Puxar uma carta" +
        "\n3 - Sair"
    ))

    switch (option) {
        case 1:
            cards.push(prompt("Qual o nome da carta a ser adicionada?"))
            break
        case 2:
            if (cards.length === 0) {
                alert("Não há cartas no baralho para serem puxadas.")
            }
            else {
                let removedCard = cards.pop()
                alert("A carta puxada foi " + removedCard)
            }
            break
        case 3:
            alert("Obrigado por utilizar nosso sistema!")
            break
        default:
            alert("Opção inválida!")
            break
    }
} while (option !== 3)
