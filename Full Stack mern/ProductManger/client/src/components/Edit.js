import React, { useState,useEffect } from 'react';
import axios from 'axios'
import { navigate } from '@reach/router'

const Edit = (props) => {
    const [title, settitle] = useState("")
    const [price, setPrice] = useState("")
    const [desc, setDesc] = useState("")

    useEffect(() => {
        
        axios.get('http://localhost:8000/api/products/' + props.id)
            .then(res => {
                console.log(res);
                settitle(res.data.product.title);
                setPrice(res.data.product.price);
                setDesc(res.data.product.desc);
            })
    }, [])

        const editProduct = e => {
            //prevent default behavior of the submit
            e.preventDefault();
            //make a post request to create a new person
            axios.put('http://localhost:8000/api/products/'+props.id + "/edit" , {
                title,
                price,
                desc,
            })
                .then(res=>console.log(res))
                .catch(err=>console.log(err));
                navigate('/products/'+ props.id)
               

        }

    return (

        <div>
            <form onSubmit={editProduct}>
                <h1>Update product</h1>
                <label>Title</label>
                <input type="text" onChange={(e)=>settitle(e.target.value)} value={title}></input><br/>
                <label>Price</label>
                <input type="text" onChange={(e)=>setPrice(e.target.value)} value={price}></input><br/>
                <label>Description</label>
                <input type="text" onChange={(e)=>setDesc(e.target.value)} value={desc}></input><br/>
                <button onClick={editProduct}>Edit</button>
            </form>
        </div>
    )
}

export default Edit
