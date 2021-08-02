import { Link} from "@reach/router"
import React from 'react'
import axios from 'axios' 


const ProductList = (props) => {

    const deleteProduct = (productId) =>{
        axios.delete('http://localhost:8000/api/products/delete/'+ productId)
    }

    return (
        <div>
            {props.product.products.map((pro, idx)=>{
                let address="/products/"+pro._id;
                return <div> <p><Link to = {address}>{pro.title}</Link></p> 
                <button onClick={(e)=>{deleteProduct(pro._id)}}>Delete</button> </div>
            })}
        </div>
    )
}

export default ProductList
