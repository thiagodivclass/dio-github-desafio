// var a = 1
// var b = 2
// if (a===1){
//     var a = 11
//     let b = 22 // só vale dentro do bloco
//     console.log(a)
//     console.log(b)
// }

// var = global
// let == bloco
// console.log(a)
// console.log(b)
// nome = 1
// console.log(nome+2)
// /*let*/ var nome
// Hoisting

// let nome = 'Thiago'
// let sobre = 'Madeira'
// console.log(nome+' '+sobre)
// console.log(typeof((nome)))
// console.log(nome[0]+' '+sobre[0])
// console.log(`${nome} 
// ${sobre}."`)
// console.log(`'''""`)
// console.log(nome.split(''))


// var num = 28
// num % 2 == 0 ? console.log(`O número ${num} é par, e é ${typeof(num)}.`) : 
// console.log(`O número ${num} é impar, e é ${typeof(num)}.`)


// var bool = 3===3    

// console.log(!bool)


// var array = [1,2,5,3]
// array.push('push-final')
// array.unshift(0)
/*
push adiciona no fim
unshift adiciona no início
pop tira último
shif tira o primeiro
sort ordena
*/
// for (let i = 0; i <= array.length; i++)
// console.log(i)
// console.log(array[i])

// function palindromo(string){
//     if(!string) return;

//     return string.split('').reverse().join('') === string;
    
    
     
// }

// console.log(palindromo('socorrammesubinoonibusemmarrocosl'))

// Funcão autoinvocável:
// (function(){
//     let nome = 'Thiago Madeira'
//     return console.log(nome)
// // })();

// (function(a, b){
//     let nome = a*b
//     return console.log(nome)
// })(3,10);


// function logLetras(palavra){
//     for(letra of palavra){
//         console.log(letra)
//     }
// }
// const palavra ="Thiago"
// // logLetras(palavra) 


// function logNum(manga){
//     for(leite of manga){
//         console.log(leite)
//     }
// }
// const manga = [30,25,38,45,80,59]

// logNum(manga)

// const thi = () => `Thiago Madeira ${2+2+4+4}` Arrow Function

// console.log(thi())