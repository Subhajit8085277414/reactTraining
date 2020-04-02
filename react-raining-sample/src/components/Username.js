import React, { useState } from 'react';
import * as yup from 'yup';
import {  InputGroup } from 'reactstrap';

let schema = yup.object().shape({
  usernameEntered: yup.string().required()
})
let user;
export const getUsername=()=>{
  return user;
}
const Username = (props) => {
  const { placeholder, value } = props;

   
  const [username, setUsername] = useState(value);
  const [errortext, showError] = useState(false);
  const checkValid = (input) => {
    schema.isValid({
      usernameEntered: input
     }).then(function (valid) {
      console.log(valid);
      showError(!valid);

    });

    schema.validate({usernameEntered: input}).catch(function(err){
     
     console.log( err.name);
  
      console.log(err.errors);
    })
  }

 
  const setUser=(parameter)=>{
     user=parameter;
  }




  return (
    <div>
      <InputGroup>
        <h6>
          <input type="text" placeholder={placeholder} onChange={(event) => {
            setUsername(event.target.value)
            checkValid(username)
          }} value={username}  />
         
        </h6>
      </InputGroup>
    </div>

  )
};
Username.defaultProps = {
  errorMesage: null,
  placeholder: 'Username',
  value: ''
};
export default Username;