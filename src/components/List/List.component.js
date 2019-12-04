import React, { Fragment } from 'react';
import { getAverageTemp, formatTemp, getDayOfWeek } from '../../utils';
import Spinner from '../Spinner/Spinner.component';
import Select from '../Select/Select.container';
import ButtonsContainer from '../ButtonsContainer/ButtonsContainer.container';

const List = ({ items, loading, setOrdererList, filteredClimate }) => {

  if(loading) {
    return <Spinner />
  }

  const orderedList = (e, id, consolidated_weather) => {
    setOrdererList(id, consolidated_weather, e.target.value);
  };

  const onClickBtn = (id, tempArray) => {
    debugger;
    if(id && id.target && id.target.name) {
      return filteredClimate(id.target.name, tempArray);
    }
    return filteredClimate(id, tempArray);
  }

  return (
  <Fragment>
    { items.map((data) =>
      <div className="card card-content" key={data.woeid}>
        <h1 className="card-header-title">{data.title}</h1>
        <ButtonsContainer onClickBtn={onClickBtn} tempArray={data}/>
        <div className="content is-centered">
          <Select handleClick={(e) => orderedList(e, data.woeid, data.consolidated_weather)}/>
        </div>
        <div className="columns is-centered">
          { data && data.consolidated_weather.map((day) => (
            <div key={day.id} className="container is-fluid">
              <div className="content">
                <h3 className="is-size-4 is-primary">{formatTemp(day.the_temp)}°C</h3>
              </div>
              <div className="column is-centered">
                <figure className="image is-64x64">
                  <img src={`https://www.metaweather.com/static/img/weather/png/${day.weather_state_abbr}.png`} alt="wheater-icon"/>
                </figure>
              </div>
              <span>{formatTemp(day.min_temp)}°C</span> to <span>{formatTemp(day.max_temp)}°C</span>
              <p className="is-size-7">{getDayOfWeek(day.applicable_date)}</p>
            </div>
          )) }
        </div>
        <div className="content">
          <p>Average temperature: <span>{formatTemp(getAverageTemp(data.consolidated_weather))}°C</span></p>
        </div>
      </div>)}
    </Fragment>
  );
}

export default List;
