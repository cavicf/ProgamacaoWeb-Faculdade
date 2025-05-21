const inicioRef = document.querySelector('#inicio')
const fimRef = document.querySelector('#fim')
const btnPensar = document.querySelector('#pensar')
const chuteRef = document.querySelector('#chute')
const btnAdivinhar = document.querySelector('#adivinhar')
const pResposta = document.querySelector('#resposta')

let respostaComputador = ''
let tentativa = 1


const pensar = () => {
    if(inicioRef.value === '' || fimRef.value === ''){
        pResposta.innerText = `Digite um número inteiro nos campos ínicio e fim!`
        inicioRef.value = ''
        fimRef.value = ''
        return
    }
    let inicioValor = Number(inicioRef.value)
    let fimValor = Number(fimRef.value)
    if(inicioValor > fim || (inicioValor < 0 || fimValor < 0)){
        pResposta.innerText = `Digite um número inteiro nos campos ínicio e fim!`
        inicioRef.value = ''
        fimRef.value = ''
        return
    }
    respostaComputador = Math.floor((Math.random() * (fimValor - inicioValor)) + 1) + inicioValor
    pResposta.innerText = `Pronto! Pensei em um numero entre ${inicioValor} e ${fimValor}. Tente adivinhar.` 
}

const adivinhar = () => {
    if(respostaComputador === ''){
        pResposta.innerText = `Calma Jovem! Nem pensei em nenhum número. Lembrou de clicar no "Pensar"?`
        chuteRef.value = ''
        return
    }
    if(chuteRef.value === '' || Number(chuteRef.value) < 0){
        pResposta.innerText = `Digite um numero inteiro para tentar adivinhar o que pensei`
        chuteRef.value = ''
        return
    }

    let chuteValor = Number(chuteRef.value)

        if(chuteValor === respostaComputador){
            pResposta.innerText = `Parabens!! Eu pensei no numero ${respostaComputador}. Você conseguiu após ${tentativa} tentativa(s)`
            tentativa = 1
            respostaComputador = ''
            inicioRef.value = ''
            fimRef.value = ''
            chuteRef.value = ''
        }
        else if(chuteValor < respostaComputador){
            pResposta.innerText = `O numero que pensei é maior`
            tentativa++
        }
        else{
            pResposta.innerText = `O numero que pensei é menor`
            tentativa++
        }
}

btnAdivinhar.addEventListener('click', adivinhar)
btnPensar.addEventListener('click', pensar)