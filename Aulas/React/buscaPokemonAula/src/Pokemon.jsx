import React from 'react'

//{nomePokemon, imgUrl} => operador de desustruturar => extrai valor de um objeto js
export default function Pokemon({nomePokemon, imgUrl}) {   
    //funcao react recebe um objeto js (um prop)
    //dentro vai ter as propriedade que voce deseja inserir
    return(
    <div>
        <p>{nomePokemon}</p>
        <img src={imgUrl} alt="{nomePokemon}" />
    </div>
    )
}
