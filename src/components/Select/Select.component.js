import React from 'react';

const Select = ({ handleClick }) => {

  return (
    <div className="field">
      <div className="control">
        <div className="select is-info">
          <select onClick={handleClick}>
            <option>Ascending</option>
            <option>Descendent</option>
          </select>
        </div>
      </div>
    </div>
  )
};

export default Select;

