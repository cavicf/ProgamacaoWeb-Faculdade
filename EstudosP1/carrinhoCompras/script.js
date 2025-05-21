const nomeRef = document.querySelector('#nome');
const ulRef = document.querySelector('ul');
const btnAdicionar = document.querySelector('button');

const leitura = () => {
    let nomeProduto = nomeRef.value;
    if(nomeProduto === ''){
        alert('preencha todos os campos');
        return;
    }
    adicionarProduto(nomeProduto);
}
const adicionarProduto = (nomeProduto) => {
    let li = document.createElement('li');
    let span = document.createElement('span');
    span.innerText ='1';

    let p = document.createElement('p');
    p.innerText = `${nomeProduto}. Quantidade: `;

    let btnSomar = document.createElement('button');
    btnSomar.innerText = '+';
    btnSomar.style.backgroundColor = 'green';
    btnSomar.addEventListener('click', somar);

    let btnSubtrair = document.createElement('button');
    btnSubtrair.innerText = '-';
    btnSubtrair.style.backgroundColor = 'red';
    btnSubtrair.addEventListener('click', subtrair);

    p.append(span);
    li.append(p);
    li.append(btnSomar);
    li.append(btnSubtrair);
    ulRef.append(li);
}

const somar = (evento) => {
    let quantidadeAtual = Number(evento.target.parentNode.childNodes[0].childNodes[1].innerText);
    quantidadeAtual++;
    evento.target.parentNode.childNodes[0].childNodes[1].innerText = quantidadeAtual;
}

const subtrair = (evento) => {
    let quantidadeAtual = Number(evento.target.parentNode.childNodes[0].childNodes[1].innerText);
    quantidadeAtual--;
    if(quantidadeAtual === 0){
        evento.target.parentNode.remove();
    }
    evento.target.parentNode.childNodes[0].childNodes[1].innerText = quantidadeAtual;
}
btnAdicionar.addEventListener('click', leitura);
