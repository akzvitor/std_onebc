let jobs = []

function createJob() {
    const newJob = {}

    newJob.jobName = prompt("Qual o nome da vaga?")
    newJob.description = prompt("Insira a descrição da vaga")
    newJob.endDate = prompt("Informe a data limite de inscrições para esta vaga")
    newJob.candidate = []

    const confirmation = confirm(
        "Deseja salvar esta vaga?" +
        "\n\nNome: " + newJob.jobName +
        "\nDescrição: " + newJob.description +
        "\nData limite para novas inscrições: " + newJob.endDate
    )

    if(confirmation) {
        jobs.push(newJob)

        alert("Vaga salva com sucesso!")
    } else {
        alert("A vaga não foi salva. Voltando ao menu...")
    }
}

function subscribeCandidate() {
    const jobIndex = parseFloat(prompt("Informe o índice da vaga na qual deseja realizar a candidatura"))
    const candidateName = prompt("Insira o nome do candidato: ")
    const confirmation = confirm(
        "Deseja inscrever o candidato " + candidateName +
        " na vaga " + jobs[jobIndex].jobName + "?" +
        "\n\nInformações da vaga" +
        "\nNome: " + jobs[jobIndex].jobName +
        "\nDescrição: " + jobs[jobIndex].description +
        "\nData limite para novas inscrições: " + jobs[jobIndex].endDate
    )
    if(confirmation) {
        jobs[jobIndex].candidate.push(candidateName)
    } else {
        alert("O candidato não foi inscrito na vaga. Retornando ao menu inicial...")
    }
}

function showMenu() { 
    return parseFloat(prompt(
        "Sistema de Empregos" +
        "\n\nSelecione uma opção:" +
        "\n1 - Listar vagas disponíveis" +
        "\n2 - Criar nova vaga" +
        "\n3 - Visualizar vaga" +
        "\n4 - Inscrever candidato em uma vaga" +
        "\n5 - Excluir vaga" +
        "\n6 - Sair"
    ))
}

function executeSystem() {
    let option = 0

    do {
        option = showMenu()
        switch (option) {
            case 1:
                break
            case 2:
                createJob()
                break
            case 3:
                break
            case 4:
                subscribeCandidate()
                break
            case 5:
                break
            case 6:
                alert("Encerrando o sistema...")
                break
            default:
                alert("Opção inválida")
        }
    } while (option !== 6)
}

executeSystem()

console.log(jobs)