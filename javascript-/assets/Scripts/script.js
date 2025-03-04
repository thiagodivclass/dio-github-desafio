let botaoMais = document.querySelector('#adic')
let botaoMenos = document.querySelector('#subtr')
let resposta = document.querySelector('#numero')
botaoMais.addEventListener('click', increment)
botaoMenos.addEventListener('click', decrement)




let inicio = 0

function increment(){
    
    resposta.innerHTML= inicio+=1

}

function decrement(){
    resposta.innerHTML= inicio-=1
}