import React, { Fragment } from 'react';
import { getAverageTemp, formatTemp } from '../../utils';


const List = ({ items, loading }) => {

  if(loading) {
    return <p>loading...</p>
  }

  return <Fragment>
  { items.map((data) =>
     <div className="card card-content" key={data.woeid}>
        <h1 className="card-header-title  column is-5">{data.title}</h1>
        <div className="columns is-centered">
          { data && data.consolidated_weather.map((day) => (
            <div key={day.id} className="content">
              <div className="card-image">
                <figure className="image is-64x64">
                  <img src={`https://www.metaweather.com/static/img/weather/png/${day.weather_state_abbr}.png`} alt="wheater-icon"/>
                </figure>
              </div>
              <p>Now: {formatTemp(day.the_temp)}°C</p>
              <span>{formatTemp(day.min_temp)}°C</span> to <span>{formatTemp(day.max_temp)}°C</span>
              <p className="is-size-7">{day.applicable_date}</p>
            </div>
          )) }
        </div>
        <div className="content">
        <p>Average temperature: <span>{formatTemp(getAverageTemp(data.consolidated_weather))}°C</span></p>
        </div>
      </div>)}
  </Fragment>
};

export default List;
