const titulo = document.querySelector('h1');
const botao = document.querySelector('button');
const container = document.querySelector('section');

const geraCor = () => {
    const novaCor = { //criamos um objeto js chamado novaCor
        r: Math.floor(Math.random()*256),  //que tem como atributos r g b e seus valores gerados aleatoriamente
        g: Math.floor(Math.random()*256), //são pares de chave e valor
        b: Math.floor(Math.random()*256) //as chaves seriam o r g b
    }

    return novaCor;
}

const mudaCor = () => {
    let rgb = geraCor(); //aqui rgb passa a ser o objeto gerado na função geraCor
    container.style.backgroundColor = `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`;
    titulo.innerText = `Cor de Fundo: rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`
}


botao.addEventListener('click', mudaCor);