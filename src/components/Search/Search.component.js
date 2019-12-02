import React, { useState } from 'react';
import Input from '../Input/Input.container';


const Search = ({ getLocations }) => {

  const [text, setText] = useState('');

  const handleChange = (evt) => setText(evt.target.value);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    getLocations(text);
  }

  return(
    <form className="field has-addons" onSubmit={handleSubmit}>
      <Input handleChange={handleChange} value={text}/>
      <button className="button is-info is-outlined" type="submit">Send</button>
    </form>
  );
}

export default Search;
