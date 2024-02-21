let patientsList = []
let option = 0

do {
    let patient = ""
    for (let i =0; i < patientsList.length; i++) {
        patient += (i + 1) + "° - " + patientsList[i] + "\n"
    }

    option = parseFloat(prompt(
        "Seja bem vindo ao sistema Consultas S/A!" +
        "\nConfira a fila de espera para consultar:\n" +
        patient +
        "\n" +
        "\nSelecione uma opção:" +
        "\n1 - Novo paciente" +
        "\n2 - Consultar paciente" +
        "\n3 - Sair"
    ))

    switch (option) {
        case 1:
            patientsList.push(prompt("Insira o nome do paciente:"))
            break
        case 2:
            if (patientsList.length === 0) {
                alert("Não há pacientes esperando na fila.")
            }
            else {
                let consultedPatient = patientsList.shift()
                alert(consultedPatient + " foi consultado(a).")
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