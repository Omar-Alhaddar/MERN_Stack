import { Link} from "@reach/router"
import React from 'react'


const ProductList = (props) => {
    return (
        <div>
            {props.product.products.map((pro, idx)=>{
                let address="/products/"+pro._id;
                return <p><Link to = {address}>{pro.title}</Link></p>
            })}
        </div>
    )
}

export default ProductList
