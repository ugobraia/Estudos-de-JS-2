function normalSum(a, b){
    return a + b
}

console.log(`Soma normal: ${normalSum(2, 3)}`)

const anonymousSum = function (a, b){
    return a + b
}

console.log(`Soma anônima: ${anonymousSum(2, 3)}`)

const arrowSum = (a, b) => {
    return a + b
}

console.log(`Soma arrow: ${arrowSum(2, 3)}`)

const subtract = (a, b) => a - b

console.log(`Subtração: ${subtract(2, 3)}`)

const double = n => `O dobro de ${n} é ${n * 2}`

const number = 21
console.log(double(number))

const towns = ['São Paulo', 'Rio de Janeiro', 'Curitiba', 'Belo Horizonte']

const startingWithS = towns.filter(town => town[0] === 'S')
console.log(startingWithS)