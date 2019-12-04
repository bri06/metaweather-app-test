import React from 'react';
import { formatTemp } from '../../utils';

const ButtonsContainer = ({ tempArray, onClickBtn, }) => {

  return (
    <div className="container is-fluid">
      <button onClick={(e) => onClickBtn(e, tempArray)} name="all" className="button">All</button>
    { tempArray.consolidated_weather.map(({ id, the_temp }) => the_temp && (
      <button onClick={() => onClickBtn(the_temp, tempArray)} key={id} className="button">{formatTemp(the_temp)}°C</button>
    ))}
    </div>
  )
};

export default ButtonsContainer;
