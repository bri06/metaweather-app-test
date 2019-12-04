import React from 'react';

const Select = ({ handleClick }) => {

  return (
    <div className="field">
      <div className="column">
        <div className="select is-info">
          <select onChange={handleClick}>
            <option value="1">Ascending</option>
            <option value="2">Descendent</option>
          </select>
        </div>
      </div>
    </div>
  )
};

export default Select;

