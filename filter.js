/*
filter
cria um novo array a partir do array percorrido(array original)
cria um novo array apenas com os elementos filtrados
aceita 3 parametros
item do array
index
array completo
*/

const numbers = [1, 2, 3, 4, 5];
const newnumbers = numbers.filter(function (numbers) {
    return numbers < 2
    //retun numbers > 2
})

console.log(newnumbers)

const clients = [
    {
        name: "Rodolfo",
        age: 15,
    },
    {
        name: "Aline",
        age: 19,
    },
    {
        name: "Pedro",
        age: 43,
    },
]
    const newclients = clients.filter( function(client){
    return client.age > 18
})

console.log(newclients)