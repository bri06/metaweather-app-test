import React, { Fragment } from 'react';
import { getAverageTemp, formatTemp, getDayOfWeek } from '../../utils';
import Spinner from '../Spinner/Spinner.component';
import Select from '../Select/Select.container';
import ButtonsContainer from '../ButtonsContainer/ButtonsContainer.container';

const List = ({ items, loading, setOrdererList, filteredClimate, getAllClimate }) => {

  if(loading) {
    return <Spinner />
  }

  const orderedList = (e, id, consolidatedWeather) => setOrdererList(id, consolidatedWeather, e.target.value);

  const onClickBtn = (id, woeid) => filteredClimate(id, woeid);

  const onClickAllBtn = (woeid) => getAllClimate(woeid);

  return (
  <Fragment>
    { items.map((data) =>
      <div className="box container has-text-centered" key={data.woeid}>
        <h1 className="title is-size-4 is-family-sans-serif">{data.title}</h1>
        <ButtonsContainer onClickBtn={onClickBtn} onClickAllBtn={onClickAllBtn} woeid={data.woeid} tempArray={data.consolidated_weather}/>
        <div className="column .is-full">
          <Select className="column" handleClick={(e) => orderedList(e, data.woeid, data.consolidated_weather)}/>
        </div>
        <div className="columns has-text-centered">
          { data && data.consolidated_weather.map((day) => (
            <div key={day.id} className="column .is-5 is-centered">
              <div className="level level-item">
                <h3 className="is-size-4 has-text-weight-bold	is-family-sans-serif">{formatTemp(day.the_temp)}°C</h3>
              </div>
              <div>
                <div className="level level-item is-centered">
                  <figure className="image is-64x64">
                    <img src={`https://www.metaweather.com/static/img/weather/png/${day.weather_state_abbr}.png`} alt="wheater-icon"/>
                  </figure>
                </div>
                <span className="is-family-sans-serif">{formatTemp(day.min_temp)}°C</span> to <span className="is-family-sans-serif">{formatTemp(day.max_temp)}°C</span>
                <p className="is-48x48">{getDayOfWeek(day.applicable_date)}</p>
              </div>
            </div>
          )) }
        </div>
        <div className="content">
          <p className="is-size-6">Average temperature: <span>{formatTemp(getAverageTemp(data.consolidated_weather))}°C</span></p>
        </div>
      </div>)}
    </Fragment>
  );
}

export default List;
