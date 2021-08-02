import React, {useEffect,useState} from 'react';
import Products from './Products';
import axios from 'axios';
import ProductList from './ProductList';


// eslint-disable-next-line import/no-anonymous-default-export
export default () => {

    const [product, setProduct] = useState([]);
    const [loaded, setLoaded] = useState(false);
    useEffect(()=>{
        axios.get('http://localhost:8000/api/products')
            .then(res=>{
                setProduct(res.data);
                setLoaded(true);
            });
    },[product])

    return (
        <div>
            <Products />
            <hr/>
            <h1>All Products:</h1>
           {loaded && <ProductList product={product}/>}
        </div>
    )
}

