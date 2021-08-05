import { Link} from "@reach/router"
import React,{useEffect,useState} from 'react'
import axios from 'axios' 
import Delete from "./Delete"



const ProductList = (props) => {
    const [asd, setasd] = useState(false);
    const removeFromDom = (asd) =>{
        props.removeFromDom(asd);
        setasd(true)
    }

    return (
        <div>
            {props.products.map((pro, idx)=>{
                return(
                
                <div key={idx}> 
                    <p><Link to ={"/products/"+pro._id}>{pro.title}</Link></p> 
                   <Delete id={pro._id} successCallback={()=>removeFromDom(asd)} />
                 
                </div>
                )
            })}
        </div>
    )
}

export default ProductList
