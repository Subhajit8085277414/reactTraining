import React from 'react';
import Username,{getUsername} from './Username'
import Password,{getPassword} from './Password'
import Button from './Button';
import Link from './Link';
import {  Form } from 'reactstrap';
import './square.css';
import * as yup from 'yup';

const InnerSquareComponent=(props)=>{

    const Validation=(event)=>{
        event.preventDefault()
    let schema = yup.object().shape({
        username: yup.string().required(),
        password:yup.string().required()
      })
      schema.isValid({
       
        username: getUsername(),
        password: getPassword()
      }).then(function (valid) {
        console.log(valid);
      });
}
    return (
        
        <div className="col-4">
        <Form onSubmit={Validation}>
        <Username />
        <br></br>  
        <Password />
        <br></br>
        <Button />
        <br></br>
        <Link />
      </Form>
        </div>


    );
    
}
 export default InnerSquareComponent;