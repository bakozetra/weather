import React, { useContext } from 'react'
import styled from 'styled-components';
import { Context } from '../pages/Context';

const WrapperWeather = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 26px;
  width: 84%;
  margin: auto;
@media(min-width:375px) {
 width:100%;
 display : flex ;
 flex-wrap: nowrap;
 justify-content : space-between;
} 
`
const WeatherDate = styled.div`
  width: 120px;
  min-height: 177px;
  background: #1E213A;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #E7E7EB;

  img {
    width: 56.44px;
    height: 62px;
  }

  div > div {
    display : inline;
    p{
      display: inline-block;
    }
    p+p {
      padding-left : 16px;
      color: #A09FB1;
    }
  }
 @media(min-width:375px){
 
 }


`
function OtherWeather({ isFahrentheint }) {
  const { nameCountry } = useContext(Context)
  return (
    <WrapperWeather className="dayWeather">
      {
        nameCountry.consolidated_weather?.slice(1).map(degree => {
          var mydate = new Date(degree.applicable_date);
          const dates = mydate.toDateString();
          return <WeatherDate>
            <p>{dates}</p>
            <img src={`https://www.metaweather.com/static/img/weather/${degree.weather_state_abbr}.svg`} />
            <div>
              {isFahrentheint ?
                <div id="temp">
                  <p>{((Math.round(degree.max_temp) * 9 / 5) + 32)}{'\u00b0'} F</p>
                  <p>{((Math.round(degree.min_temp) * 9 / 5) + 32)}{'\u00b0'} F</p>
                </div>
                :
                <div id="temp">
                  <p>{Math.round(degree.max_temp)}{'\u00b0'}C</p>
                  <p>{Math.round(degree.min_temp)}{'\u00b0'} C</p>
                </div>}
            </div>
            <div>
            </div>
          </WeatherDate>
        })
      }
    </WrapperWeather>
  )
}

export default OtherWeather
