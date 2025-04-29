// let x; //Undefined seria quando deixamos de preencher uma area de memoria, ou seja, algo que o interpretador não sabe qual o tipo
// let y = null; //null é o vazio que usamos deliberadamente com algum objetivo
// console.log(typeof(x));

// let z = 6;
// console.log(x++); //aqui ele imprime x=6 primeiro e depois ele incrementa para 7
// console.log(++x); //aqui ele incrementa antes de imprimir

//o ideal é salvar a referencia ao html em uma constante, para que não percamos ela
const btn = document.querySelector('button'); //consulta no html, onde especificamos por tagname, id ou class igual ao do css com .(classe) e #(id)
const main = document.querySelector('main');
const h1 = document.querySelector('h1')

//Criar uma função que executará a ação do botão ao ser clicado
//é recomendado guardar as funções em variaveis constantes para que não corra o risco de perde-la 
const geraCor = () => {
    const novaCor = {
        r: Math.trunc(Math.random()*256),
        g: Math.trunc(Math.random()*256),
        b: Math.trunc(Math.random()*256)
    }
    return novaCor;
}
const mudaCor = () => { //primeiro indicamos a quantidade de parametros que vc recebe com o () e depois passa o => que indica o que a função executa abrindo as {}
    const novacor = geraCor();

    //Aplicar ao html 
    //acessar a main e aplicar a cor
    main.style.backgroundColor = `rgb(${novacor.r}, ${novacor.g}, ${novacor.b})`; //o apóstofro permite que manipulemos variaveis dentro de uma string junto com a frase através do ${}

    //Acessar o h1 e mudar o texto
    h1.innerText = `Cor de Fundo: rgb(${novacor.r}, ${novacor.g}, ${novacor.b})`
}
btn.addEventListener('click', mudaCor);

