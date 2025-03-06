let numero = {
    um: document.querySelector('#num1'),
    dois: document.querySelector('#num2')
}
let botao = document.querySelector('#comp')
let res = document.querySelector('#return')

botao.addEventListener('click', compare)


function compare() {

    let a = Number(numero.um.value)
    let b = Number(numero.dois.value)
    if (a == 0 || b == 0) {
        alert('Erro: Um ou mais campos vazios!')
       
    }
    else {

        if (a === b && a + b < 10) {
            res.innerHTML = `Os números ${a} e ${b} são iguais, e, somando os dois, temos ${a + b}, que é menor do que 10.`
        } else if (a === b && a + b >= 10 && a + b <= 20) {
            res.innerHTML = `Os números ${a} e ${b} são iguais, e, somando os dois, temos ${a + b}, que é entre 10 e 20.`
        } else if (a === b && a + b > 20) {
            res.innerHTML = `Os números ${a} e ${b} são iguais, e, somando os dois, temos ${a + b}, que é maior do que 20.`
        } else if (a !== b && a + b < 10) {
            res.innerHTML = `Os números ${a} e ${b} são diferentes, e, somando os dois, temos ${a + b}, que é menor do que 10.`
        } else if (a !== b && a + b >= 10 && a + b <= 20) {
            res.innerHTML = `Os números ${a} e ${b} são diferentes, e, somando os dois, temos ${a + b}, que é entre 10 e 20.`
        } else if (a !== b && a + b > 20) {
            res.innerHTML = `Os números ${a} e ${b} são diferentes, e, somando os dois, temos ${a + b}, que é maior do que 20.`
        }


    }

}

