let botao = { menos:document.querySelector('#subtr'), mais:document.querySelector('#adic')} 
let resposta = document.querySelector('#numero')
botao.mais.addEventListener('click', increment)
botao.menos.addEventListener('click', decrement)




let inicio = 0

function increment(){
    
    resposta.innerHTML= inicio+=1
    if(inicio >=0){
        resposta.style.color = 'darkgray'
    }
    if(inicio >=10){
        document.querySelector("#adic").disabled = true
    }
    else{
        document.querySelector("#subtr").disabled = false
    }

}

function decrement(){
    
    resposta.innerHTML= inicio-=1
    if(inicio <0){
        resposta.style.color ='red'
    }
    if(inicio <=-5){
        document.querySelector("#subtr").disabled = true
    }
    else{
        document.querySelector("#adic").disabled = false
    }

}