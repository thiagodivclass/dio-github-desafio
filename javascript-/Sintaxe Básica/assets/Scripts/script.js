// let array = [12, 3, 'Thi', 8, true, ['arry2'], ['array3'] ];

// array.forEach(function(item, index){console.log(item, index)})
// array.push(38)
// array.pop()
// array.shift()
// array.unshift('Primeiro')
// array.splice(0, 4)

// console.log(array)
// console.log(array.indexOf(true))

// let novo = array.slice(0, 2)
// console.log(novo)

let objeto = {string: 'string', number: 7, boolean: true, array: ['array'], objtInterno: {objtoIntern:'Objeto interno'} }
// console.log(objeto.objtInterno.objtoIntern)

let objeto2 = objeto.objtInterno.objtoIntern
let num = objeto.number
let {boolean, array, string} = objeto
console.log(objeto2)
console.log(num)
console.log(boolean, array, string)