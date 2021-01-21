import React, { useContext } from 'react'
import { Context } from '../pages/Context';

function OtherWeather({isFahrentheint}) {
  const {nameCountry} = useContext(Context)
  return (
    <div className="dayWeather">
        {
          nameCountry.consolidated_weather?.slice(1).map(degree => {
            console.log(degree);
            var mydate = new Date(degree.applicable_date);
            const dates = mydate.toDateString();
            return <div>
              <p>{dates}</p>
              <img src={`https://www.metaweather.com/static/img/weather/${degree.weather_state_abbr}.svg`} />
              <div>
                {isFahrentheint ? 
                <div id="temp">
                 <p>{((Math.round(degree.max_temp)* 9 / 5) + 32)}{'\u00b0'} F</p>
                 <p>{((Math.round(degree.min_temp) * 9 / 5) + 32)}{'\u00b0'} F</p>
                </div> 
                : 
                <div  id="temp">
                 <p>{Math.round(degree.max_temp)}{'\u00b0'}C</p>
                 <p>{Math.round(degree.min_temp)}{'\u00b0'} C</p>  
                </div>}
               
              </div>
              <div>
              </div>
            </div>
          })
        }
      </div>
  )
}

export default OtherWeather
