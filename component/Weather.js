import React, { useContext } from 'react'
import { Context } from '../pages/Context'
import style from "styled-components"

const WrapperDetail = style.div`
  padding-top : 60px;
  padding-bottom : 155px;
  h1 {
    font-size: 24px;
    line-height: 28px;
    color: #E7E7EB;
  }
  div {
  display: flex;
  gap: 48px;
  flex-wrap: wrap;
  article {
    width: 328px;
    display: flex;
    color: #E7E7EB;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background: #1E213A;
    p {
      font-size: 16px;
  } 
  p + p {
    color: #e7e7eb;
    font-size: 50px;
  }

  }
`

function WeatherDetail() {
  const { nameCountry } = useContext(Context)
  return (
    <WrapperDetail>
      <h1>Today’s Hightlights</h1>
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
    </WrapperDetail>
  )
}

export default WeatherDetail
