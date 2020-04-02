import React, { useState } from 'react';
import * as yup from 'yup';
import {  InputGroup } from 'reactstrap';
let value;
export  const getPassword=()=>{
  return value;
}

const Password = () => {
  let schema = yup.object().shape({
    pass: yup.string().required()
  })
  
  const [password, setPass] = useState(value);
  const [errors, showError] = useState(false);
  const checkValid = (input) => {
    schema.isValid({
      pass: input
    }).then(function (status) {
      showError(!status);
    });
  }

  
  const setPassword=(parameter)=>{
     value=parameter;
  }
 


  return (
    <div>
      <InputGroup>
        <input type="password" placeholder="Password" value={password} onChange={(event) => {
          setPass(event.target.password)
          checkValid(password);
          setPassword(password);
        }} />
      </InputGroup>
    </div>
  )
}


export default Password;