let jobs = []

function listAllJobs() {
    if (jobs.length !== 0) {
        jobs.forEach(function (job, jobIndex) {
            alert(
                "Nome da vaga: " + jobs[jobIndex].jobName +
                "\nÍndice: " + jobIndex +
                "\nQuantidade de candidatos: " + jobs[jobIndex].candidates.length
            )
        })
    } else {
        alert("Não há vagas.")
    }
}

function createJob() {
    const newJob = {}

    newJob.jobName = prompt("Qual o nome da vaga?")
    newJob.description = prompt("Insira a descrição da vaga")
    newJob.endDate = prompt("Informe a data limite de inscrições para esta vaga")
    newJob.candidates = []

    const confirmation = confirm(
        "Deseja salvar esta vaga?" +
        "\n\nNome: " + newJob.jobName +
        "\nDescrição: " + newJob.description +
        "\nData limite para novas inscrições: " + newJob.endDate
    )

    if (confirmation) {
        jobs.push(newJob)
        alert("Vaga salva com sucesso!")
    } else {
        alert("A vaga não foi salva. Voltando ao menu...")
    }
}

function showSpecificJob() {
    const jobIndex = parseFloat(prompt("Informe o índice da vaga que deseja visualizar"))

    if (jobs[jobIndex]) {
        let showNames = ""

        for (let i = 0; i < jobs[jobIndex].candidates.length; i++) {
            showNames += jobs[jobIndex].candidates[i] + "\n"
        }

        alert(
            "Nome da vaga: " + jobs[jobIndex].jobName +
            "\nÍndice: " + jobIndex +
            "\nDescrição: " + jobs[jobIndex].description +
            "\nData limite: " + jobs[jobIndex].endDate +
            "\nQuantidade de candidatos: " + jobs[jobIndex].candidates.length +
            "\nNome dos candidatos: " + showNames
        )
    } else if (jobs.length !== 0) {
        alert("Não há vagas.")
    } else {
        alert("Índice inválido.")
    }
}

function subscribeCandidate() {
    const jobIndex = parseFloat(prompt("Informe o índice da vaga na qual deseja realizar a candidatura"))

    if (jobs[jobIndex]) {
        const candidateName = prompt("Insira o nome do candidato: ")
        const confirmation = confirm(
            "Deseja inscrever o candidato " + candidateName +
            " na vaga " + jobs[jobIndex].jobName + "?" +
            "\n\nInformações da vaga" +
            "\nNome: " + jobs[jobIndex].jobName +
            "\nDescrição: " + jobs[jobIndex].description +
            "\nData limite para novas inscrições: " + jobs[jobIndex].endDate
        )

        if (confirmation) {
            jobs[jobIndex].candidates.push(candidateName)
            alert("Candidato cadastrado com sucesso!")
        } else {
            alert("Inscrição cancelada. Retornando ao menu inicial...")
        }
    } else if (jobs.length !== 0) {
        alert("Não há vagas.")
    } else {
        alert("Índice inválido.")
    }
}

function deleteJob() {
    const indexRemoved = parseFloat(prompt("Qual o índice da vaga a ser removida?"))

    if (jobs[indexRemoved]) {
        const confirmation = confirm(
            "Tem certeza que deseja excluir a vaga " + jobs[indexRemoved].jobName + "?" +
            "\nInformações da vaga" +
            "\nNome: " + jobs[indexRemoved].jobName +
            "\nDescrição: " + jobs[indexRemoved].description +
            "\nData limite para novas inscrições: " + jobs[indexRemoved].endDate
        )

        if (confirmation) {
            jobs.splice(indexRemoved, 1)
            alert("A vaga foi excluída com sucesso!")
        } else {
            alert("Operação cancelada. Retornando ao menu inicial...")
        }
    } else if (jobs.length !== 0) {
        alert("Não há vagas.")
    } else {
        alert("Índice inválido.")
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
                listAllJobs()
                break
            case 2:
                createJob()
                break
            case 3:
                showSpecificJob()
                break
            case 4:
                subscribeCandidate()
                break
            case 5:
                deleteJob()
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