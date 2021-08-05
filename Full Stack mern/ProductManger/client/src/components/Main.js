import React, {useEffect,useState} from 'react';
import ProductsForm from './ProductsForm';
import axios from 'axios';
import ProductList from './ProductList';
import { navigate } from '@reach/router'


// eslint-disable-next-line import/no-anonymous-default-export
export default () => {

    const [product, setProduct] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const [asd, setAsd] = useState(false);
    
    useEffect(()=>{
        axios.get('http://localhost:8000/api/products')
            .then(res=>{
                setProduct(res.data);
                console.log(res.data);
                setLoaded(true);
                setAsd(false);
            });
    },[asd])

    const hezkel = () => {
        setAsd(true);
    }


    const createProduct = newproduct => {
        axios.post('http://localhost:8000/api/products/new', newproduct)
            .then(res=>{
                console.log(res.data);
                setProduct([...product, res.data]); 
                // setProduct(product.concat(res.data))
                setAsd(true);

            })
            // .then(() => navigate('/'))

    }

    return (
        <div>
             <ProductsForm value ="create" onSubmitProp={createProduct} initTitle="" initPrice="0" initDesc=""/>
            <hr/>
            <h1>All Products:</h1>
           
            {loaded && <ProductList products={product} removeFromDom={hezkel}/>}
        </div>
    )
}

