function lineupPlayer() {
    const position = document.getElementById('position').value
    const playerName = document.getElementById('player-name').value
    const shirtNumber = document.getElementById('shirt-number').value

    const confirmation = confirm(
        "Deseja escalar o jogador " + playerName + " na posição de " + position + "?"
    )

    if (confirmation) {
        const playerLineup = document.getElementById('lineup')
        const li = document.createElement('li')

        li.innerText = "(" + shirtNumber + ") " + playerName + " - " + position
        li.id = shirtNumber

        playerLineup.appendChild(li)
    }

    document.getElementById('position').value = ""
    document.getElementById('player-name').value = ""
    document.getElementById('shirt-number').value = ""
}

function removePlayer() {
    const removeNumber = document.getElementById('remove-number').value
    const removePlayer = document.getElementById(removeNumber)

    const confirmation = confirm(
        "Deseja remover o jogador " + removePlayer.innerText + "?"
    )

    if (confirmation) {
        const playerLineup = document.getElementById('lineup')

        playerLineup.removeChild(removePlayer)
    }

    document.getElementById('remove-number').value = ""
}