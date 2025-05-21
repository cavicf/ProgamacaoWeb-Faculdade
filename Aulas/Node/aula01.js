// Objetivo: buscar um pokemon na api com o auxilio da biblioteca axios que faz requisições http, ou seja, busca em apis da web
const axios = require("axios"); //precisamos fazer uma referencia para a biblioteca dentro do nosso código

const url = `https://pokeapi.co/api/v2/pokemon/`; //pegamos o link da api que vamos utilizar

//Com o auxilio do async, vamos fazer uma requisição na api, mas manter o nosso código funcionando enquanto aguarda a resposta da requisição
//portanto fazemos uma função pra essa requisição, a chamamos e seguimos com o funcionamento normal do nosso programa enquanto esperamos a resposta
const buscaPokemon = async () => {
    const pokemons = await axios.get(url); //aqui falamos pro codigo aguardar a resposta antes de executar a próxima linha e com o axios.get pegamod todos os itens da api
    console.log(pokemons.data.results[0].name); // aqui é necessário conhecer a estrutura da api, no caso da pokemon, os elementos estão no data
    //os resultados vem em forma de lista de objetos json, então podemos filtrar a nossa pesquisa como se estivessemos acessando uma lista e um objeto
}

buscaPokemon(); //chamamos a função 
console.log('ola mundo') //perceba que essa linha é executada antes da resposta da requisição na api, pois o async garante o funcionamento do restante do código mesmo enquanto a operação na api é executada, isso é conhecido como programação assíncrona.