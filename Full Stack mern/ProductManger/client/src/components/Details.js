import React, {useState , useEffect} from 'react'
import axios from 'axios'
import { Link} from "@reach/router"
import { navigate } from '@reach/router'


const Details = (props) => {
    
    const [product,setProduct]=useState("")
    
     useEffect(()=>{
        axios.get("http://localhost:8000/api/products/"+ props.id)
        .then(res=>{setProduct(res.data.product)
        })
    },[])
    // console.log(product)

    const deleteProduct = (productId) =>{
        axios.delete('http://localhost:8000/api/products/delete/'+ productId)
        navigate('/')
    }
    return (
        <div>
         
            <h1>{product.title}</h1>
            <h1>{product.price}</h1>
            <h1>{product.desc}</h1>

            <Link to={"/products/" + product._id + "/edit"}>Edit</Link><br/>
            <button onClick={(e)=>{deleteProduct(product._id)}}>Delete</button>
   
            
        </div>
    )
}

export default Details
