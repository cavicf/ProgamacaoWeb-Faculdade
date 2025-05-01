let inicioRef = document.querySelector('#inicio');
let fimRef = document.querySelector('#fim')
const btnPensar = document.querySelector('#pensar');
const chuteRef = document.querySelector('#chute');
const btnAdivinhar = document.querySelector('#adivinhar');
const pResultado = document.querySelector('#resultado');
let numeroSorteado = null;
let tentativa = 1;

const pensarNumero = () => {
    if(inicioRef.value == '' || fimRef.value == '' ){
        pResultado.innerText = 'Digite um número inteiro nos campos "Início" e "Fim"!';
        return;
    }
    const inicioValor = Number(inicioRef.value);
    const fimValor = Number(fimRef.value);
    if((inicioValor < 0 || fimValor < 0) || (inicioValor > fimValor) || (inicioValor === fimValor)){
        pResultado.innerText = 'Digite um número inteiro nos campos "Início" e "Fim"!';
        return;
    }
    
    numeroSorteado = Math.floor(Math.random()*(fimValor - inicioValor + 1)) + inicioValor
    pResultado.innerText = `Pronto! Pensei em um número entre ${inicioValor} e ${fimValor}. Tente Adivinhar`;
}

const adivinharNumero = () => {
    if(numeroSorteado === null){
        pResultado.innerText = 'Calma Jovem! Nem pensei em nenhum número. Lembrou de clicar no "Pensar"?'
        return;
    }
    if(chuteRef.value === ''){
        pResultado.innerText = `Digite um número inteiro para adivinhar no que eu pensei!`;
        return;
    }

    const chute = Number(chuteRef.value);
    if(Number(chuteRef.value) < 0){
        pResultado.innerText = `Digite um número inteiro para adivinhar no que eu pensei!`;
        return;
    }

        if (chute === numeroSorteado){
            pResultado.innerText = `Parabens!!!Eu pensei no numero ${numeroSorteado}. Voce conseguiu após ${tentativa} tentativa(s)!`;
            numeroSorteado = null;
            chuteRef.value = '';
            tentativa = 1;
            inicioRef.value = '';
            fimRef.value = '';
        }
        else if(chute < numeroSorteado){
            pResultado.innerText = `O numero que pensei é maior`;
            tentativa++;
            chuteRef.value = '';
        }
        else{
            pResultado.innerText = `O numero que pensei é menor`;
            tentativa++;
            chuteRef.value = '';
        }
}

btnPensar.addEventListener('click', pensarNumero);
btnAdivinhar.addEventListener('click', adivinharNumero);
