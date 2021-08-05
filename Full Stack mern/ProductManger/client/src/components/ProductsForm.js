import React, { useState } from 'react';
import axios from 'axios';


const Products = (props) => {
    const {initTitle,initPrice,initDesc, onSubmitProp, value } = props;
    const [title, setTitle] = useState(initTitle)
    const [price, setPrice] = useState(initPrice)
    const [desc, setDesc] = useState(initDesc)

        // const onClickHandler = e => {
        //     //prevent default behavior of the submit
        //     e.preventDefault();
        //     //make a post request to create a new person
        //     axios.post('http://localhost:8000/api/products/new' , {
        //         title,
        //         price,
        //         desc,
        //     })
        //         .then(res=>console.log(res))
        //         .catch(err=>console.log(err));
        //         settitle("");
        //         setPrice("");
        //         setDesc("");
        // }

        const onSubmitHandler = e => {
            e.preventDefault();
            onSubmitProp({title,price,desc});
            setTitle("");
            setPrice(0);
            setDesc("");
        }

    return (
        <div>
            <form onSubmit={onSubmitHandler}>
                <label>Title</label>
                <input type="text" onChange={(e)=>setTitle(e.target.value)} value={title}></input><br/>
                <label>Price</label>
                <input type="text" onChange={(e)=>setPrice(e.target.value)} value={price}></input><br/>
                <label>Description</label>
                <input type="text" onChange={(e)=>setDesc(e.target.value)} value={desc}></input><br/>
                <button>{value}</button>
            </form>
        </div>

        
    )
    
}

export default Products
