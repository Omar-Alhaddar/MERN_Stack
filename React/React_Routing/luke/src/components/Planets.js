import axios from 'axios'
import React, {useState, useEffect} from 'react'


const Planets = (props) => {
    const [planets, setPlanets] = useState('')

    useEffect(()=>{
        axios.get("https://swapi.dev/api/planets/"+props.id)
        .then((res) => setPlanets(res.data))
        .catch((err)=> console.log(err))
    },[props.id])


    return (
        <div>
            <h1>{planets.name}</h1>
            <p>Climate: {planets.climate}</p>
            <p>Terrain: {planets.terrain}</p>
            <p>Surface Water: {planets.surface_water}</p>
            <p>Population: {planets.population}</p>
        </div>
    )
}

export default Planets
