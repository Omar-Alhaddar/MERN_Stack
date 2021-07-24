import React, { useState } from "react";

const UserForm = (props) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [conPass, setConPass] = useState("");
  const [firstNameError, setFirstNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [conPassError, setConPassError] = useState(""); 

  const createUser = (e) => {
    e.preventDefault();
    const newUser = { firstName, lastName, email, password, conPass };

    console.log("Welcome", newUser);
  };

  
  const handleFirstName = (e) => {
    setFirstName(e.target.value);
    if(e.target.value.length < 2) {
      setFirstNameError("FirstName must be at least 2 characters!");
    }
    else {
      setFirstNameError("");
    }
}

const handleLastName = (e) => {
  setLastName(e.target.value);
  if(e.target.value.length < 2) {
    setLastNameError("LastName must be at least 2 characters!");
  }
  else {
    setLastNameError("");
  }
}

const handleEmail = (e) => {
  setEmail(e.target.value);
  if(e.target.value.length < 5) {
    setEmailError("Email must be at least 5 characters!");
  }
  else {
    setEmailError("");
  }
}

const handlePassword = (e) => {
  setPassword(e.target.value);
  if(e.target.value.length < 8) {
    setPasswordError("Password must be at least 8 characters!");
  }
  else {
    setPasswordError("");
  }
}

const handleConPass = (e) => {
  setConPass(e.target.value);
  if(e.target.value !== password){
    setConPassError("conPass must match password");
  }
  else {
    setConPassError("");
  }
}

  return (
    <form onSubmit={createUser}>
                  
      <div>
         <label>firstName: </label>   
        <input type="text" onChange={handleFirstName} />
        {
                    firstNameError ?
                    <p style={{color:'red'}}>{ firstNameError  }</p> :
                    ''
                }        
      </div>            
      <div>
          <label>lastName: </label>          
        <input type="text" onChange={handleLastName} />
        {
                    lastNameError ?
                    <p style={{color:'red'}}>{ lastNameError  }</p> :
                    ''
                }       
      </div>           
      <div>
        <label>Email Address: </label>
        <input type="text" onChange={handleEmail} />
        {
                    emailError ?
                    <p style={{color:'red'}}>{ emailError  }</p> :
                    ''
                }       
      </div>
                  
      <div>
        <label>Password: </label>
        <input type="password" onChange={handlePassword} />
        {
          passwordError ?
          <p style= {{color:'red'}}>{passwordError}</p>:
          ''
        }
      </div>  
             
      <div>
        <label>conPass: </label>
        <input type="password" onChange={handleConPass} />
        {
          conPassError ?
          <p style={{color:'red'}}>{conPassError}</p> :
        ' '
        }
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
