import React, { useState,useEffect } from 'react';
import axios from 'axios'
import { navigate } from '@reach/router'
import ProductsForm from './ProductsForm';


const Edit = (props) => {
    const [product, setProduct] = useState([]);
    const [loaded, setLoaded] = useState(false);


    useEffect(() => {
        
        axios.get('http://localhost:8000/api/products/' + props.id)
            .then(res => {
                    setProduct(res.data);
                    setLoaded(true);
                    console.log(res.data);
            })
    }, [props.id])

        const editProduct = product => {
            axios.put('http://localhost:8000/api/products/'+props.id + "/edit" , product)
                .then(res=>console.log(res))
                .catch(err=>console.log(err));
                navigate('/products/'+ props.id)
               

        }
        // console.log(product.product.title);
    return (
            <div>
                {product.title}
        {loaded && (
            <ProductsForm
            value="Update"
            onSubmitProp={editProduct}
            initTitle={product.product.title}
            initPrice={product.product.price}
            initDesc={product.product.desc}
            />
        )}
            </div>
        )


}

export default Edit
