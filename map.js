/* 
    map
    cria um novo array, a partir do array percorrido(areay original)
    cria um novo array, com a mesma quantidade de itens do array original
    aceita 3 paramentros
    item do array
    index
    array completo
*/

const numbers = [1, 2, 3, 4, 5];

const newnumbers = numbers.map(function (numbers, index, array) {
    console.log(index)
    console.log(array)
    return numbers * 10
})

console.log(newnumbers)

const clients = [
    {
        name: "Rodolfo",
        age: 25,
    },
    {
        name: "Aline",
        age: 29,
    },
    {
        name: "Pedro",
        age: 43,
    },
]

const newclients = clients.map(function (client) {
    return client.age + 10
    //return client. name
    //return cliente.age
    //return client.age + 10
})
console.log(newclients)
