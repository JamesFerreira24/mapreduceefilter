/**
 * reduce
 * retorna um valor pode ser um novo array um objeto string number etc
 * aceita 4 parametros
 * acumulador
 * valor atual
 * index
 * array completo
 */

const store = [10, 5, 7, 8, 19];

const sum = store.reduce(function(acumulador, valoratual){
    return valoratual + acumulador
    //return valoratual * acumulador
}//**,10 valor inicial */
 )

console.log(sum)