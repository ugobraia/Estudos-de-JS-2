const dayjs = require('dayjs')
dayjs().format()

function birthday(date){
    const birthday = dayjs(date)
    const today = dayjs()

    const ageInYears = today.diff(birthday, 'year')
    const nextBirthday = birthday.add(ageInYears + 1, 'year')
    const daysToNextBirthday =nextBirthday.diff(today, 'day') + 1

    console.log(`\nIdade: ${ageInYears}`)
    console.log(`Próximo aniversário: ${nextBirthday.format('DD/MM/YYYY')}`)
    console.log(`Faltam ${daysToNextBirthday} dias para o próximo aniversário\n`)
}

birthday('2002-04-17')