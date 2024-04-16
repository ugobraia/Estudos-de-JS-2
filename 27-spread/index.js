const towns = ['Prontera', 'Izlude', 'Payon', 'Alberta', 'Geffen', 'Morroc']

console.log(towns)
console.log(...towns)
console.log(...towns[0])

const townsCopy = towns

townsCopy.pop()
townsCopy.pop()
townsCopy.push('Juno')

console.log({towns, townsCopy})

const townsClone = [...towns]

townsClone.push('Aldebaran')

console.log({towns, townsCopy, townsClone})

const townsObject = {...towns}
const townsObjectClone = {...townsObject}

townsObjectClone.test = 'teste'

console.log({townsObject, townsObjectClone})