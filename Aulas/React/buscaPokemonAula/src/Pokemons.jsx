import React, { useState } from 'react'
import axios from 'axios';
import Pokemon from './Pokemon';
import './styles/Pokemons.css';

export default function Pokemons() {

    const ulr = "https://pokeapi.co/api/v2/pokemon/";

    //const [nomePok, setNomePok] = useState(''); 
    //const [imgUrlPok, setImgUrlPok] = useStateState('');
    //setNomePok(pokemonName);
    //setImgUrlPok(pokemon.data.sprites.front_default);
        //nome => estado (vai transformar o nome em um estado)
        //useState devolve dois parametros
        //  => 1º uma area de memoria (valor) Ex: [nomePok,...]
        //  => uma referencia para uma funcao capaz de mudar o valor da variavel Ex: [...,setNomePok] 
        //     ==> obs: setNome é uma convensao
        //useState retorna entao um vetor
        //useState precisa importar a biblioteca dele ==> import { useState } from 'react'

    const  [pokemons, setPokemons] = useState(''); //vetor de estador, porque quer que o componente rederize quando mudado

    //Funcao para ir na API e devolver um pokemon
    //Retorna no formato JSON
    const buscaPokemon = async () => {

        const pokemonID = Math.trunc(Math.random()*400) + 1;

        //aqui vamos buscar o pokemon
        const pokemon = await axios.get(`${ulr}${pokemonID}`); //retorna exatamente o JSON que a pagina da API mostra  
        
        return pokemon;
    }

    const adicionaPokemon = async () => {

        //cria um vetor temporario e seta ela
        //nao eh o jeito mais eficiente de ser feito
        //para fins didaticos, eh bom
        const vetorTemp = [];

        for(let i = 0; i < 5; i++)
        {
            const pokemon = await buscaPokemon();

            vetorTemp.push(<Pokemon nomePokemon={pokemon.data.name} imgUrl={pokemon.data.sprites.front_default}/>); 
            //criou um vetor de html [componente Pokemon]
            //isso eh possivel por conta do jsx
        }

        setPokemons(vetorTemp);

    }

    return (
        <>
            <button onClick={adicionaPokemon}>Gerar Pokemons</button>
            {/* className eh a gambiarra que encontraram para nao confundir com o class do js */}
            <div className='cards'>
                {/* devolve o estado 'pokemons' por isso precisa {} */}
                {pokemons}
            </div>
        </>
    )
}
