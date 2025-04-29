const ul = document.querySelector('ul');
const botao = document.querySelector('button');
const quantidadeRef = document.querySelector('#qtd');
const nomeRef = document.querySelector('#nome'); //está pegando uma referencia ao elemento html e não o valor propriamente dito que o usuario esta inserindo
const statusMsg = document.querySelector('#status');

const msg = 'Seu carrinho esta vazio! Adicione produtos';

const addProdutos = () => {
    if (quantidadeRef.value === '' || nomeRef.value === ''){
        alert('Campos não podem ser vazios!');
        return;
    } //o .value pega o valor do input que o usuario inseriu. Obs: ele pega esse valor como string, então pode ser necessário converter pra numeros
    const quantidadeValor = Number(quantidadeRef.value); //converte a string em valor numerico
    const nomeValor = nomeRef.value;

    const novaLi = document.createElement('li');
    novaLi.innerText = `${nomeValor}: ${quantidadeValor} `;

    const novoBotao = document.createElement('button');
    novoBotao.innerText = 'X';
    novoBotao.addEventListener('click', removeProduto); //a cada novo li criado e botão criado, esse botão será amarrado a função que remove o elemento li especifico que foi clicado, pq estamos enviando um evento

    novaLi.append(novoBotao); //se tem apenas 1 filho que quero associar a outro elemento e ele está no final (imaginar a arvore), posso usar só o append que associa esse elemento ao pai
    ul.append(novaLi);
    //é uma forma mais moderna de adiconar filhos a elementos html, recebe dois parametros - 1.onde será colocado e 2.quem será inserido
    //ul.insertAdjacentElement('beforeend', novaLi);
    
    statusMsg.innerText = '';
}

//Quando um botao é clicado, o HTML envia um evento para o js, que é o próprio evento de clique
const removeProduto = (evento) => {
    evento.target.parentNode.remove() //com o target, conseguimos acessar o elemento html que disparou o evento, ou seja, o botão que foi clicado
    if (ul.childNodes.length === 0){ //verficamos se o elemento ul possuid filhos, verificando o comprimento dos seus nós filhos, que se for 0 significa que não há filhos
        statusMsg.innerText = msg;
    }
}

botao.addEventListener('click', addProdutos);