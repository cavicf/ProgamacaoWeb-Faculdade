const pontosUm = document.querySelector('#pontos1');
const pontosDois = document.querySelector('#pontos2');
const selectRef = document.querySelector('select');
const btnJogador1 = document.querySelector('#jogador1');
const btnJogador2 = document.querySelector('#jogador2');
const btnReiniciar = document.querySelector('#reiniciar');

let pontuacaoVitoria = Number(selectRef.value);
selectRef.addEventListener('change', (e) => {
    pontuacaoVitoria = Number(e.target.value);
    reiniciar();
})

let pontos1 = 0;
let pontos2 = 0;

const pontuarJogadorUm = () => {
    if(pontos1 < pontuacaoVitoria && pontos2 < pontuacaoVitoria){
        pontos1++;
        pontosUm.innerText = `${pontos1}`;
        checarvitoria();
    }
}

const pontuarJogadorDois = () => {
    if(pontos2 < pontuacaoVitoria && pontos1 < pontuacaoVitoria){
        pontos2++;
        pontosDois.innerText = `${pontos2}`;
        checarvitoria();
    }
}

const checarvitoria = () => {
    if (pontos1 === pontuacaoVitoria){
        pontosUm.style.color = 'green';
        pontosDois.style.color = 'red';
    }
    else if(pontos2 === pontuacaoVitoria){
        pontosDois.style.color = 'green';
        pontosUm.style.color = 'red';
    }
}

const reiniciar = () => {
    pontos1 = 0;
    pontos2 = 0;
    pontosUm.innerText = '0';
    pontosDois.innerText = '0';
    pontosUm.style.color = 'black';
    pontosDois.style.color = 'black';
    
}

btnJogador1.addEventListener('click', pontuarJogadorUm);
btnJogador2.addEventListener('click', pontuarJogadorDois);
btnReiniciar.addEventListener('click', reiniciar);