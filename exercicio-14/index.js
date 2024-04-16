function media(...numbers){
    let sum = numbers.reduce((acc, number) => acc + number, 0)
    return sum / numbers.length
}

function mediana(...numbers){
    const orderedNumbers = numbers.sort((a, b) => a - b)
    console.log(orderedNumbers)

    if (orderedNumbers.length % 2 == 0){
        return media(orderedNumbers[orderedNumbers.length / 2 - 1], orderedNumbers[orderedNumbers.length / 2])
    } else {
        return orderedNumbers[Math.floor(orderedNumbers.length / 2)];
    }
}

function moda(...numbers){
    const quantidade = numbers.map(num => [
        num,
        numbers.filter(n => num === n).length
    ])
    quantidade.sort((a, b) => b[1] - a[1])
    return quantidade[0][0]
}

function mediaAritmetica(...entries){
    const sum = entries.reduce((acc, {number, weight}) => acc + (number * (weight ?? 1)), 0)
    const weightSum = entries.reduce((acc, entry) => acc + (entry.weight ?? 1), 0)
    return sum / weightSum
}

// Média Aritmética Simples
const average = (...numbers) => {
    const sum = numbers.reduce((acc, number) => acc + number, 0)
    return sum / numbers.length
}

// Média Ponderada
const weightedAverage = (...entries) => {
    const sum = entries.reduce((acc, {number, weight}) => acc + (number * (weight ?? 1)), 0)
    const weightSum = entries.reduce((acc, entry) => acc + (entry.weight ?? 1), 0)
    return sum / weightSum
}

// Mediana
const median = (...numbers) => {
    const orderedNumbers = [...numbers].sort((a, b) => a - b)
    const middle = Math.floor(orderedNumbers.length / 2)
    if(orderedNumbers.length % 2 !== 0){
        return orderedNumbers[middle]
    }
    const firstMedian = orderedNumbers[middle - 1]
    const secondMedian = orderedNumbers[middle]
    return average(firstMedian, secondMedian)
}

// Moda
const mode = (...numbers) => {
    // [[n , qtd], [n, qtd], [n, qtd]...]
    const quantities = numbers.map(num => [
        num,
        numbers.filter(n => num === n).length
    ])
    quantities.sort((a, b) => b[1] - a[1])
    return quantities[0][0]
}