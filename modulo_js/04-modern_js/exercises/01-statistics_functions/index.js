const arithmeticAvg = (...numbers) => (numbers.reduce((accum, num) => accum + num, 0)) / numbers.length
console.log(`A média aritmética é ${arithmeticAvg(2, 6, 3, 7, 4)}`)

const median = (...numbers) => {
    let result = 0
    const sortedNumbers = [...numbers].sort((a, b) => a - b)
    const middleElement = Math.floor(numbers.length / 2)

    if (sortedNumbers.length % 2 === 0) {
        result = (sortedNumbers[middleElement] + sortedNumbers[(middleElement) - 1]) / 2
    } else {
        result = sortedNumbers[middleElement]
    }

    return result
}
console.log(`A mediana é ${median(15, 14, 8, 7, 3)}`)

const weightedAvg = (...entries) => {
    const sum = entries.reduce((accum, { number, weight }) => accum + (number * (weight ?? 1)), 0)
    const weightSum = entries.reduce((accum, entry) => accum + (entry.weight ?? 1), 0)
    return sum / weightSum
}
console.log(`Média ponderada: ${weightedAvg(
    { number: 9, weight: 3 },
    { number: 7 },
    { number: 10, weight: 1 }
)}`)

const mode = (...numbers) => {
    // [[n, qtd], [n, qtd], [n, qtd]...]
    const times = numbers.map(num => [
        num,
        numbers.filter(n => num === n).length
    ])
    times.sort((a, b) => b[1] - a[1])
    return times[0][0]
}
console.log(`Moda: ${mode(1, 1, 5, 4, 9, 7, 4, 3, 5, 2, 4, 0, 4)}`)