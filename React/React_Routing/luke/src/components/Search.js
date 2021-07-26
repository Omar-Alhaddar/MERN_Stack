import { useState } from "react";
import { navigate } from "@reach/router";

const Search = () => {
    const [option, setOption] = useState("people");
    const [id, setId] = useState(1);

    const searchHandler = (e) =>{
        e.preventDefault();
        navigate(`/${option}/${id}`);

    }  
 

    return (
        <div>
            <form>
            <label for="luke">Search for: </label>
            <select onChange={(e)=> setOption (e.target.value)}>
                <option value="people">people</option>
                <option value="planets">planets</option>
            </select>
            <label>ID: </label>
            <input type="number" onChange={(e)=> setId(e.target.value)}></input>
            <button onClick={searchHandler}>Search</button>
            </form>
        </div>
    )
}



export default Search
