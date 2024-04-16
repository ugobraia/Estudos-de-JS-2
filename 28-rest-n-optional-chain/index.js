// Rest parameter
function sum(param, ...numbers){
    return numbers.reduce((accum, num) => accum + num, 0)
}

console.log(sum(1, 2, 3, 4, 5)) // 15
console.log(sum(1, 2, 3)) // 6
console.log(sum(1, 2)) // 3

// Optional chaining
const user = {
    name: 'John Doe',
    email: 'doejohn@email.com',
    friends: [{
        name: 'Mary',
        address: {
            street: 'Main St',
            number: 89
        }
    }], 
    age: 30,
    phone: {
        countryCode: '+55',
        ddd: '22',
        number: '99999-9999'
    }
}
// console.log(user.friends[0].phone.ddd) // Error
console.log(user?.friends[0]?.phone?.ddd)
console.log(user?.brothers?.length)

console.log(user.brothers?.[5].name)

