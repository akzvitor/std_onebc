let initialAmount = parseFloat(prompt("Insira o montante inicial em R$: "))
let option = 0
let actualAmount = initialAmount

do {
    option = parseFloat(prompt(
        "Seu montante inicial foi R$" + initialAmount + ".\n" +
        "Seu montante atual é de R$" + actualAmount + ".\n\n" +
        "Escolha uma das opções para realizar o controle financeiro:" +
        "\n1 - Adicionar quantia" +
        "\n2 - Remover quantia" +
        "\n3 - Sair" 
        ))
    
    switch (option) {
        case 1:
            actualAmount += parseFloat(prompt("Insira o valor que você deseja adicionar: "))
            break
        case 2:
            actualAmount -= parseFloat(prompt("Quanto você deseja remover? "))
            break
        case 3:
            alert("Obrigado por utilizar nosso sistema!")
        default:
            alert("Opção inválida!")
            break
    }
} while (option != 3)