const quantidade = document.querySelector('#qtd');
const nomeProduto = document.querySelector('#nome');
const btnAdicionar = document.querySelector('button');
const statusAtual = document.querySelector('#statusAtual');
const ul = document.querySelector('ul');
const msg = 'Sua lista está vazia. Adicione produtos no carrinho!'

const adicionarCarrinho = () => {
    statusAtual.innerText = '';
    let qtd = Number(quantidade.value); //faço a transformação do valor que vem como string em numero
    let nome = nomeProduto.value;
    let li = document.createElement('li');
    li.innerText = `${qtd}: ${nome} `;
    botao = document.createElement('button');
    botao.innerText = 'X'
    botao.addEventListener('click', removerProduto);

    li.append(botao);
    ul.append(li);
}

const removerProduto = (clique) => {
    clique.target.parentNode.remove();
    if (ul.childNodes.length === 0){
        statusAtual.innerText = msg;
    }
}

btnAdicionar.addEventListener('click', adicionarCarrinho);

