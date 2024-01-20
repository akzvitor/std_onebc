let option = 0

do {
    option = parseFloat(prompt(
        "Olá! Seja bem-vindo ao Banco Bank!\n" +
        "Escolha a opção desejada:\n" +
        "\n1 - Realizar transferência financeira entre contas Bank" +
        "\n2 - Realizar TED (transferência financeira uma conta de outro banco)" +
        "\n3 - Consultar extrato" +
        "\n4 - Suporte" +
        "\n5 - Encerrar"
    ))

    switch (option) {
        case 1:
            alert("Aguarde, você está sendo redirecionado para a área de transferência...")
            break
        case 2:
            alert("Aguarde, você está sendo redirecionado para a área de TED's...")
            break
        case 3:
            alert("Aguarde, você está sendo redirecionado para a página do seu extrato...")
            break
        case 4:
            alert("Aguarde, você está sendo redirecionado para a área de suporte...")
            break
        case 5:
            alert("Obrigado por usar nosso sistema!")
            break
        default:
            alert("Opção inválida!")
            break
    }
} while (option != 5)