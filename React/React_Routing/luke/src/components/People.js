import React,{useState,useEffect} from 'react'
import axios from "axios"

const People = (props) => {
    const [people, setPeople] = useState('')

     useEffect(()=>{
        axios.get("https://swapi.dev/api/people/"+props.id)
        .then((res)=>setPeople(res.data))
        .catch((err)=>console.log(err))

    },[props.id])

    return (
        <div>
            <h1>{people.name}</h1>
            <p>Height: {people.height}</p>
            <p>Mass: {people.mass}</p>
            <p>Hair Color: {people.hair_color}</p>
            <p>Skin Color: {people.skin_color}</p>
            
        </div>
    )
}

export default People
