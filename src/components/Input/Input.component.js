import React from 'react';

const Input = ({ handleChange, value }) => (
  <input className="input" name="text" type="text" placeholder="Type something here" onChange={handleChange} value={value}/>
);

export default Input;