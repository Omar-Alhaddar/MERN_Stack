import React, {useState , useEffect} from 'react'
import axios from 'axios'
const Details = (props) => {
    
    const [product,setProduct]=useState("")
    
     useEffect(()=>{
        axios.get("http://localhost:8000/api/products/"+ props.id)
        .then(res=>{setProduct(res.data.product)
        })
    },[])
    // console.log(product)
    return (
        <div>
         
            <h1>{product.title}</h1>
            <h1>{product.price}</h1>
            <h1>{product.desc}</h1>
            
        </div>
    )
}

export default Details
