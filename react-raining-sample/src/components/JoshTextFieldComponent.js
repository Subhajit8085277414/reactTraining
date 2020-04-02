import React, { useState } from 'react';

const JoshTextFieldComponent = (props) => {
  const { placeholder, value } = props;

  const [inputStateValue, updateInputValue] = useState(value);


  return (
    <input 
      type='text'
      placeholder={placeholder}
      onChange={ (event) => { updateInputValue(event.target.value)}}
      value={inputStateValue}
    />
  )
};

JoshTextFieldComponent.propTypes = {};

JoshTextFieldComponent.defaultProps = {
  errorMesage: null,
  placeholder: 'Please enter your name',
  value: 'Default value'
};


export default JoshTextFieldComponent;