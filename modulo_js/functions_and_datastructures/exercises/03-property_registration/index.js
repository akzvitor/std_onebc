const properties = []
let option = 0

do {

    option = parseFloat(prompt(
        "Seja bem vindo ao Cadastrador de Imóveis!" +
        "\n\nNumero de imóveis cadastrados no sistema: " + properties.length +
        "\n\nSelecione uma opção:" +
        "\n1 - Cadastrar um novo imóvel" +
        "\n2 - Mostrar imóveis salvos" +
        "\n3 - Sair"
    ))

    switch (option) {
        case 1:
            const newProperty = {}

            newProperty.ownerName = prompt("Nome do proprietário:")
            newProperty.roomQuantity = prompt("Quantidade de quartos:")
            newProperty.bathroomQuantity = prompt("Quantidade de banheiros:")
            newProperty.hasGarage = prompt("O imóvel possui garagem? (Sim/Não)")

            const confirmation = confirm(
                "Deseja salvar este imóvel?" +
                "\n\nProprietário: " + newProperty.ownerName +
                "\nQuantidade de quartos: " + newProperty.roomQuantity +
                "\nQuantidade de banheiros: " + newProperty.bathroomQuantity +
                "\nPossui garagem: " + newProperty.hasGarage
            )

            if (confirmation) {
                properties.push(newProperty)
                alert("O imóvel foi salvo com sucesso!")
            }
            else {
                alert("Voltando para o menu...")
            }
            break
        case 2:
            let showProperties = ""

            for (let i = 0; i < properties.length; i++) {
                showProperties += (i + 1) + "° imóvel" + "\nProprietário: " + properties[i].ownerName +
                    "\nQuantidade de quartos: " + properties[i].roomQuantity +
                    "\nQuantidade de banheiros: " + properties[i].bathroomQuantity +
                    "\nPossui garagem: " + properties[i].hasGarage + "\n\n"
            }

            alert(
                "Imóveis cadastrados atualmente:" +
                "\n\n" + showProperties
            )
            break
        case 3:
            alert(
                "Obrigado por utilizar este protótipo!" +
                "\n\nEncerrando o sistema..."
            )
            break
        default:
            alert("Opção inválida.")
            break
    }
} while (option !== 3)