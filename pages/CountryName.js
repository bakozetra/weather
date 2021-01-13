import React, { useContext, useEffect, useState } from 'react'
import { Context } from './Context'

const CountryName = () => {
  const { setNameCountry, nameCountry} = useContext(Context);
  console.log(nameCountry);
  console.log("hello");
  console.log(nameCountry.consolidated_weather?.[0].humidity);
  console.log("hello");
  const [input, setInput] = useState("")

  return (
    <div>
      <div>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)} />
      <button>Search</button>
      <div>
        <h2>{nameCountry.title}</h2>
      </div>
      </div>
      <div>
        {
          nameCountry.consolidated_weather?.slice().map(degree => {
            var mydate = new Date(degree.applicable_date);
            const dates = mydate.toDateString();
            return <div>
              <p>{degree.weather_state_name}</p>
              <img src={`https://www.metaweather.com/static/img/weather/${degree.weather_state_abbr}.svg`}/>
              <p>{dates}</p>
            </div>
          })         
        }
      </div>
      <div>
        <article>
          <p>Wind status</p>
          <p>{Math.round(nameCountry.consolidated_weather?.[0].wind_speed)} mph</p>
        </article>
        <article>
          <p>Humidity</p>
          <p>{Math.round(nameCountry.consolidated_weather?.[0].humidity)}</p>
        </article>
        <article>
          <p>Visibility</p>
          <p>{Math.round(nameCountry.consolidated_weather?.[0].visibility)} miles</p>
        </article>
        <article>
          <p>Air pressure</p>
          <p>{Math.round(nameCountry.consolidated_weather?.[0].air_pressure)}mb</p>
        </article>
      </div>
    </div>
  )
}
export default CountryName;