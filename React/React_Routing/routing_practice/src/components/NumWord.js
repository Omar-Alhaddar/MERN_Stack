import React from 'react';


const NumWord = (props) => {

    let isNum = true;

    if (isNaN(+props.id)) {
      isNum = false
    };

    return(

         <div>
              {isNum ? <h1>The number is: {props.id}</h1> : <h1>The word is: {props.id}</h1>}
         </div>
         
    );
}


export default NumWord;