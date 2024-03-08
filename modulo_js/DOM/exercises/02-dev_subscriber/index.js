function createLabel(text, labelFor) {
    const label = document.createElement('label')
    label.innerText = text
    label.for = labelFor
    return label
}

function createInput(id, name, value, type = 'text', placeholder = '') {
    const input = document.createElement('input')
    input.id = id
    input.name = name
    input.value = value
    input.type = type
    input.placeholder = placeholder
    return input
}

function addTech() {
    const techList = document.getElementById('techList')

    const techItem = document.createElement('li')
    const itemIndex = inputRows
    inputRows++
    techItem.id = 'inputRow-' + itemIndex
    techItem.className = 'inputRow'

    const techNameLabel = createLabel('Tecnologia: ', 'techName-' + itemIndex)
    const techNameInput = createInput('techName-' + itemIndex, 'techName', '')

    const xpTimeLabel = createLabel('  Tempo de experiência: ')
    const id1 = 'expRadio-' + itemIndex + '.1'
    const littleXpTimeInput = createInput(id1, 'techExp-' + itemIndex, '0-2 anos', 'radio')
    const littleXpTimeLabel = createLabel('0-2 anos', id1)
    const id2 = 'expRadio-' + itemIndex + '.2'
    const mediumXpTimeInput = createInput(id2, 'techExp-' + itemIndex, '3-4 anos', 'radio')
    const mediumXpTimeLabel = createLabel('3-4 anos', id2)
    const id3 = 'expRadio-' + itemIndex + '.3'
    const lotXpTimeInput = createInput(id3, 'techExp-' + itemIndex, '5+ anos', 'radio')
    const lotXpTimeLabel = createLabel('5+ anos ', id3)

    const removeTechButton = document.createElement('button')
    removeTechButton.type = 'button'
    removeTechButton.innerText = 'Remover'
    removeTechButton.addEventListener('click', function() {
        techList.removeChild(techItem)
    })

    techItem.append(
        techNameLabel, techNameInput, xpTimeLabel, littleXpTimeInput, littleXpTimeLabel,
        mediumXpTimeInput, mediumXpTimeLabel, lotXpTimeInput, lotXpTimeLabel,
        removeTechButton
    )
    techList.append(techItem)
}

const form = document.getElementById('devForm')
const addTechButton = document.getElementById('addTech')
const developers = []
let inputRows = 0

addTechButton.addEventListener('click', addTech)

form.addEventListener('submit', function (ev) {
    ev.preventDefault()

    const devNameInput = document.getElementById('devName')
    const inputRows = document.querySelectorAll('.inputRow')
    let technologies = []

    inputRows.forEach(function (row) {
        const techName = document.querySelector('#' + row.id + ' input[name="techName"]').value
        const techExp = document.querySelector('#' + row.id + ' input[type="radio"]:checked').value
        technologies.push({ name: techName, exp: techExp })
    })

    const newDev = { devName: devNameInput.value, technologies: technologies }
    developers.push(newDev)
    alert('Dev cadastrado com sucesso!')

    devNameInput.value = ''
    inputRows.forEach(function (row) {
        row.remove()
    })

    console.log(developers)
})