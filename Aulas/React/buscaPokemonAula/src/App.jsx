import { useState } from 'react';
import './App.css';
import Pokemon from './Pokemon';
import Pokemons from './Pokemons';
import axios from 'axios';

//export default eh o padrao para retornar o componente
export default function App() {
  
  //componente react = funcao js que sabe se juntar html, css e js em uma funcao so 
  //ele sabe se rendirizar, saber sua logica e sabe se posicionar
  //permite a criação de elementos de interface de usuário
  //no caso do react, o componente eh o nome do arquivo que eh o nome da funcao que eh o ponto de partida

  //como html e js estao juntas permite parametrizar e fazer diversas funcionalidades
  //let cidade = 'Itajuba';
  //return(
  //  <h1>Opa! Sua cidade eh: {cidade}</h1>
  //)

  //react precisa de um componente html que seja de um nivel hierarquico maior
  //react fragmente [tag vazia] <> </> => permite inserir tags sem utilizar um componente de maior hierarquia

  return(
    //Entender isso como uma funcao sendo chamada
    <>
      <Pokemons />
    </>
  )
}

