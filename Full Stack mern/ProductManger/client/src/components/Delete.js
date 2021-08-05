import React,{useState} from 'react';
import axios from 'axios';


const Delete = (props) =>{


    const deleteProduct =  (e) => {
        e.preventDefault();
        axios.delete("http://localhost:8000/api/products/delete/"+ props.id)
        .then(props.successCallback())
        .catch(err => console.log(err))
    };

    return(
<div>
    <form onSubmit={deleteProduct} >
        <input type="submit" value="Delete" />
    </form>

</div>

    );

};

export default Delete;