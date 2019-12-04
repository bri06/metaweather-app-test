import React from 'react';
import { formatTemp } from '../../utils';

const ButtonsContainer = ({ tempArray, onClickBtn, onClickAllBtn, woeid }) => {

  return (
    <div className="container is-fluid">
      <button onClick={() => onClickAllBtn(woeid)} name="all" className="button">All</button>
    { tempArray.map(({ id, the_temp }) => the_temp && (
      <button onClick={() => onClickBtn(the_temp, woeid)} key={id} className="button">{formatTemp(the_temp)}°C</button>
    ))}
    </div>
  );
};

export default ButtonsContainer;
