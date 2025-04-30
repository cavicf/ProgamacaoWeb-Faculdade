const btn = document.querySelector('button');
const nomePRef = document.querySelector('#nome');
const ul = document.querySelector('ul');

const leitura = () => {
    const nomeValue = nomePRef.value;
    if(!nomeValue){
        alert('Preencha o campo');
        return;
    }

    addProduto(nomeValue);
}

const addProduto = (nomeProduto) => {
    const li = document.createElement('li');

    const p = document.createElement('p');
    p.innerText = `${nomeProduto}. Quantidade: `;

    const span = document.createElement('span');
    span.innerText = '1';

    p.append(span);

    const btnAdd = document.createElement('button');
    btnAdd.innerText = '+';
    btnAdd.style.backgroundColor = 'green'
    btnAdd.addEventListener('click', Adicionar);

    const btnSub = document.createElement('button');
    btnSub.innerText = '-';
    btnSub.style.backgroundColor = 'red'
    btnSub.addEventListener('click', Subtrair);

    li.append(p);
    li.append(btnAdd);
    li.append(btnSub);
    ul.append(li);
}

const Adicionar = (evento) => {
   let qtdAtual = Number(evento.target.parentNode.childNodes[0].childNodes[1].innerText);
   qtdAtual++;
   evento.target.parentNode.childNodes[0].childNodes[1].innerText = qtdAtual;
}

const Subtrair = (evento) => {
let qtdAtual = Number(evento.target.parentNode.childNodes[0].childNodes[1].innerText);
   qtdAtual--;

   if (qtdAtual <= 0){
        evento.target.parentNode.remove();
   }
   
   evento.target.parentNode.childNodes[0].childNodes[1].innerText = qtdAtual;
}

btn.addEventListener('click', leitura);
