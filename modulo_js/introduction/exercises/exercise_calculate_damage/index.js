const nameAttacker = prompt("Informe o nome do personagem que irá atacar: ")
const powerAttacker = parseFloat(prompt("Agora, informe seu poder de ataque: "))

const nameDefender = prompt("Informe o nome do personagem que receberá o ataque: ")
const lpDefender = parseFloat(prompt("Agora, seus pontos de vida: "))
const defenseDefender = parseFloat(prompt("Pontos de defesa: "))
const shieldDefender = prompt("Ele possui um escudo? (S/N): ")

let damageTaken

if (powerAttacker > defenseDefender && shieldDefender == "N") {
    damageTaken = (powerAttacker - defenseDefender)
} else if (powerAttacker > defenseDefender && shieldDefender == "S") {
    damageTaken = ((powerAttacker - defenseDefender)/2)
} else if (powerAttacker <= defenseDefender) {
    damageTaken = 0
}

alert("O dano causado foi de " + damageTaken + "!!!")

if ((lpDefender - damageTaken) <= 0) {
    alert(
        "Resultado final da rodada:\n" +
        "\n" + nameAttacker +
        "\nPoder de ataque: " + powerAttacker +
        "\n\n" + nameDefender +
        "\nPontos de vida: " + (lpDefender - damageTaken) +
        "\nStatus: morto"
    )
} else {
    alert(
        "Resultado final da rodada:\n" +
        "\n" + nameAttacker +
        "\nPoder de ataque: " + powerAttacker +
        "\n\n" + nameDefender +
        "\nPontos de vida: " + (lpDefender - damageTaken) +
        "\nPontos de defesa: " + defenseDefender 
    )
}
