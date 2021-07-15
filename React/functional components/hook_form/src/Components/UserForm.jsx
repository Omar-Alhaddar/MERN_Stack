import React, { useState } from "react";

const UserForm = (props) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [conPass, setConPass] = useState("");

  const createUser = (e) => {
    e.preventDefault();
    const newUser = { firstName, lastName, email, password, conPass };
    console.log("Welcome", newUser);
  };

  return (
    <form onSubmit={createUser}>
                  
      <div>
         <label>firstName: </label>   
        <input type="text" onChange={(e) => setFirstName(e.target.value)} />        
      </div>            
      <div>
          <label>lastName: </label>          
        <input type="text" onChange={(e) => setLastName(e.target.value)} />
      </div>           
      <div>
        <label>Email Address: </label>
        <input type="text" onChange={(e) => setEmail(e.target.value)} />
      </div>
                  
      <div>
        <label>Password: </label>
        <input type="password" onChange={(e) => setPassword(e.target.value)} />
      </div>         
      <div>
        <label>conPass: </label>
        <input type="password" onChange={(e) => setConPass(e.target.value)} />
      </div>     
      <input type="submit" value="Create User" />

              <h1>Your Form Data</h1>
      <p>FirstName: {firstName}</p>
      <p>lastName: {lastName}</p>
      <p>Email: {email}</p>
      <p>Password: {password}</p>
      <p>conPass: {conPass}</p>
    </form>


  );
};

export default UserForm;
