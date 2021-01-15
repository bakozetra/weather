import React, { useContext } from 'react'
import { Context } from '../pages/Context';

function OtherWeather() {
  const {nameCountry} = useContext(Context)
  return (
    <div className="dayWeather">
        {
          nameCountry.consolidated_weather?.slice(1).map(degree => {
            var mydate = new Date(degree.applicable_date);
            const dates = mydate.toDateString();
            return <div>
              <p>{dates}</p>
              <img src={`https://www.metaweather.com/static/img/weather/${degree.weather_state_abbr}.svg`} />
              <div>
              </div>
            </div>
          })
        }
      </div>
  )
}

export default OtherWeather
