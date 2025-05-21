const equacaoRef = document.querySelector('#equacao'); 
const resultadoRef = document.querySelector('#Resultado');
const btnEquacao = document.querySelector('#geraEquacao');  
const btnResposta = document.querySelector('#validaResposta'); 
const respostaRef = document.querySelector('#resposta'); 


const operadores = ['+', '-', '*'];
let resposta = 0;

const gerarEquacao = () => {
    let indice = Math.floor(Math.random()*3)
    let operadorAtual = operadores[indice];
    let algarismoUm = Math.floor(Math.random()*10);
    let algarismoDois = Math.floor(Math.random()*10);
    if(operadorAtual==='+'){
        resposta = algarismoUm + algarismoDois;
        equacaoRef.innerText = `${algarismoUm} + ${algarismoDois}`;
    }
    else if(operadorAtual==='-'){
        resposta = algarismoUm - algarismoDois;
        equacaoRef.innerText = `${algarismoUm} - ${algarismoDois}`;
    }
    else{
        resposta = algarismoUm * algarismoDois;
        equacaoRef.innerText = `${algarismoUm} * ${algarismoDois}`;
    }
}

const validarResposta = () => {
    if(respostaRef.value === ''){
        alert('insira uma resposta');
        return
    }
    let respostaUsuario = Number(respostaRef.value);
    if(respostaUsuario === resposta){
        resultadoRef.innerText = 'Parabéns!!';
        resultadoRef.style.color = 'green';
    }
    else{
        resultadoRef.innerText = `Deu ruim! A resposta correta é ${resposta}!`;
        resultadoRef.style.color = 'red';
    }
}

btnEquacao.addEventListener('click', gerarEquacao);
btnResposta.addEventListener('click', validarResposta);
