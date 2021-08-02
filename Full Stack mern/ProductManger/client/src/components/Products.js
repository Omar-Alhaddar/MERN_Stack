import React, { useState } from 'react';
import axios from 'axios';


const Products = (props) => {

    const [title, settitle] = useState("")
    const [price, setPrice] = useState(0)
    const [desc, setDesc] = useState("")

        const onClickHandler = e => {
            //prevent default behavior of the submit
            e.preventDefault();
            //make a post request to create a new person
            axios.post('http://localhost:8000/api/products/new' , {
                title,
                price,
                desc,
            })
                .then(res=>console.log(res))
                .catch(err=>console.log(err));
                settitle("");
                setPrice("");
                setDesc("");
        }

    return (
        <div>
            <form>
                <label>Title</label>
                <input type="text" onChange={(e)=>settitle(e.target.value)} value={title}></input><br/>
                <label>Price</label>
                <input type="text" onChange={(e)=>setPrice(e.target.value)} value={price}></input><br/>
                <label>Description</label>
                <input type="text" onChange={(e)=>setDesc(e.target.value)} value={desc}></input><br/>
                <button onClick={onClickHandler}>Create</button>
            </form>
        </div>

        
    )
    
}

export default Products
