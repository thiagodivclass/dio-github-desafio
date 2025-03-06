let resposta = document.querySelector('#resp')
let botao ={sim:document.querySelector('#yes'), nao:document.querySelector('#no')}
botao.sim.addEventListener('click', novo)
botao.nao.addEventListener('click', fim)

function calculadora() {

    const operacao = Number(prompt('Escolha uma operação: \n 1 - Adição \n 2 - Subtração \n 3 - Multiplicação  \n 4 - Divisão inteira \n 5 - Divisão real \n 6 - Potenciação ')
    )


    if (operacao > 0 && operacao < 7) {
        let n1 = Number(prompt('Insira o primeiro valor:'))
        let n2 = Number(prompt('Insira o segundo valor:'))
        let resultado

        function soma() {
            resultado = n1 + n2
            resposta.innerHTML = `${n1} + ${n2} = ${resultado}`
            novaop()


        }

        function sub() {
            resultado = n1 - n2
            resposta.innerHTML = `${n1} - ${n2} = ${resultado}`
            novaop()

        }

        function mult() {
            resultado = n1 * n2
            resposta.innerHTML = `${n1} x ${n2} = ${resultado}`
            novaop()

        }

        function diviIn() {
            resultado = n1 / n2
            resposta.innerHTML = `${n1} / ${n2} = ${resultado}`
            novaop()

        }

        function diviReal() {
            resultado = n1 % n2
            resposta.innerHTML = `O resto da divisão entre ${n1} e ${n2} é = ${resultado}`
            novaop()

        }

        function potenc() {
            resultado = n1 ** n2
            resposta.innerHTML = `${n1} elevado a ${n2} = ${resultado}`
            novaop()

        }



        switch (operacao) {
            case 1:
                soma()
                break
            case 2:
                sub()
                break
            case 3:
                mult()
                break
            case 4:
                diviIn()
                break
            case 5:
                diviReal()
                break
            case 6:
                potenc()
                break
            default:
                alert('Valor inválido!')
                calculadora()

        }

    } else {
        alert('Opção inválida.')
        calculadora()
    }

}

    function novo() {
        calculadora();
       
    }

    function fim(){
    resposta.innerHTML = 'Ok, até mais!'    

    }
    
    calculadora();
    