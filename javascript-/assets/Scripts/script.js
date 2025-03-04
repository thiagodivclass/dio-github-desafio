let botao = { menos:document.querySelector('#subtr'), mais:document.querySelector('#adic')} 
let resposta = document.querySelector('#numero')
botao.mais.addEventListener('click', increment)
botao.menos.addEventListener('click', decrement)




let inicio = 0

function increment(){
    
    resposta.innerHTML= inicio+=1

}

function decrement(){
    resposta.innerHTML= inicio-=1
}