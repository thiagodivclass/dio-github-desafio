let numero = {
    um: document.querySelector('#num1'),
    dois: document.querySelector('#num2')
}
let botao = document.querySelector('#comp')
let res = document.querySelector('#return')

botao.addEventListener('click', compare)

let reset = document.querySelector('#limp')
reset.addEventListener('click', resete)

function resete(){
    res.innerHTML=''
    numero.um.value=''
    numero.dois.value=''
    numero.um.focus()
}


function compare() {

    let a = Number(numero.um.value)
    let b = Number(numero.dois.value)
    if (a == 0 || b == 0) {
        alert('Erro: Um ou mais campos vazios!')
       
    }
    else {

        if(a===b && a+b < 10){
            res.innerHTML=`Os números ${a} e ${b} São iguais, e, somando os dois, temos ${a+b}, que é menor do que 10 e menor do que 20.`
        }

        if(a===b && a+b >= 10 && a+b <= 20){
            res.innerHTML=`Os números ${a} e ${b} São iguais, e, somando os dois, temos ${a+b}, que está entre 10 e 20.`
        }

        if(a===b && a+b > 20){
            res.innerHTML=`Os números ${a} e ${b} São iguais, e, somando os dois, temos ${a+b}, que é maior do que 10 e maior do que 20.`
        }

        if(a!==b && a+b > 20){
            res.innerHTML=`Os números ${a} e ${b} São diferentes, e, somando os dois, temos ${a+b}, que é maior do que 10 e maior do que 20.`
        }

        if(a!==b && a+b <= 20 && a+b >= 10){
            res.innerHTML=`Os números ${a} e ${b} São diferentes, e, somando os dois, temos ${a+b}, que está entre 10 e 20.`
        }

        if(a!==b && a+b < 10){
            res.innerHTML=`Os números ${a} e ${b} São diferentes, e, somando os dois, temos ${a+b}, que é menor do que 10 e menor do que 20.`
        }

    }

}

