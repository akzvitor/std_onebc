function summonPlayer() {
    const teamLineup = document.getElementById('team-lineup')

    const ul = document.createElement('ul')

    const playerLi = document.createElement('li')

    const playerPositionInput = document.getElementById('position')
    const playerNameInput = document.getElementById('name')
    const playerTShirtNumberInput = document.getElementById('tshirt-number')

    const playerPosition = playerPositionInput.value
    const playerName = playerNameInput.value
    const playerTShirtNumber = playerTShirtNumberInput.value

    const confirmation = confirm(
        "Deseja escalar o jogador " + playerName + " na posição de " + playerPosition + "?"
    )

    if (confirmation) {
        playerLi.innerText = playerPosition + " " + playerName + " - Camisa " + playerTShirtNumber

        ul.appendChild(playerLi)

        teamLineup.appendChild(ul)

        playerNameInput.value = ""
        playerPositionInput.value = ""
        playerTShirtNumberInput.value = ""
    }

}

function removePlayer() {
    const teamLineup = document.getElementById('team-lineup')

    const removeNumberInput = document.getElementsById('remove-number')
    const removeNumber = removeNumberInput.value

    teamLineup.removeChild(removeNumberInput.value === removeNumber)
}