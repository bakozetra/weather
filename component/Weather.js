import React, { useContext } from 'react'
import { Context } from '../pages/Context'

function WeatherDetail() {
   const { nameCountry } = useContext(Context)
  return (
    <div className="WeatherDetail">
    <article>
      <p>Wind status</p>
      <p>{Math.round(nameCountry.consolidated_weather?.[0].wind_speed)} mph</p>
    </article>
    <article>
      <p>Humidity</p>
      <p>{Math.round(nameCountry.consolidated_weather?.[0].humidity)}%</p>
      <progress id="file" max="100" value={Math.round(nameCountry.consolidated_weather?.[0].humidity)}>{Math.round(nameCountry.consolidated_weather?.[0].humidity)} </progress>
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
  )
}

export default WeatherDetail
