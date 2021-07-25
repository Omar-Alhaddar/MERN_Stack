import React, { useEffect, useState } from 'react';

const PokemonApi = (props) => {
    const [pokemon , setPokemon] = useState([]);

    const showPokemon = () => {

        fetch("https://pokeapi.co/api/v2/pokemon?limit=807")
        .then(response => {
            return response.json();
        }).then(response => {
            console.log(response);
            setPokemon(response.results);
        }).catch(err=>{
            console.log(err);
        });

    }

    return(
        <>
        <div>

        <button onClick={showPokemon}>fetch Pokemon </button>

            {pokemon.length > 0 && pokemon.map((pokemon, index)=>{
                return (
                    <ul>
                        <li key={index}>{pokemon.name}</li>
                    </ul>
                
                )
            })}
        </div>
        </>
    );


}
export default PokemonApi;