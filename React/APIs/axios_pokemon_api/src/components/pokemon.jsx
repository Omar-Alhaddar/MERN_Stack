import React, { useState } from 'react';
import axios from 'axios';

const PokemonApi = (props) => {

    const [pokemon, setPokemon] = useState([]);

    const showPokemon = () => {
        axios.get("https://pokeapi.co/api/v2/pokemon?limit=807")
        .then(response => {
            console.log(response);
            setPokemon(response.data.results);
        })
        .catch(err=>{
            console.log(err);
        })
    }

return(
    <>
     <div>

<button onClick={showPokemon}> Fetch Pokemon</button>

    {pokemon.length > 0 && pokemon.map((pokemon, index)=>{
        return (
            <ul>
                <li key={index}>
                    {pokemon.name}
                </li>
            </ul>

        )
    })}


</div>
</>
);
}

export default PokemonApi;