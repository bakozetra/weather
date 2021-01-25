import React, { useContext, useState } from 'react'
import { Context } from './Context'
import WeatherDetail from "../component/Weather"
import OtherWeather from '../component/OtherWeather';

const CountryName = () => {
  const { nameCountry, setName, fetchData, fetchApi, city, name } = useContext(Context);
  const [input, setInput] = useState("")
  const [isLogging, setIsLogging] = useState(false);
  const [isFahrentheint, setFahren] = useState(false);
  function Submit(e) {
    e.preventDefault()
    fetchApi(input);
  }

  function SubmitButton(e) {
    console.log(e.target.id);
    e.preventDefault();
    setName(e.target.id);
    fetchData(e.target.id);
  }

  var dateToday = new Date(nameCountry.consolidated_weather?.[0].applicable_date);
  const showDate = dateToday.toDateString();


  return (
    <>
      <div className="container">
        <div className="dayToday">
          <button
            className="search_place"
            placeholder="Search for a place"
            onClick={() => setIsLogging(!isLogging)}
          >Search for a place</button>
          {isLogging && (
            <>
              <form>
                <label className="label_seacrh">
                  <button className="close" onClick={() => setIsLogging(true)}>X</button>
                  <input
                    value={input}
                    onChange={(e) => setInput(e.target.value)} />
                  <button onClick={Submit}>Search</button>
                  <div>
                    {
                      city?.map(i => {
                        return (
                          <form className="name_country">
                            <button id={i.title} onClick={SubmitButton}>{i.title}</button>
                          </form>
                        )
                      })
                    }
                  </div>
                </label>
              </form>
            </>
          )}
          <div>
          </div>
          <img src={`https://www.metaweather.com/static/img/weather/${nameCountry.consolidated_weather?.[0].weather_state_abbr}.svg`} />
          {
            isFahrentheint ? <p>{(((Math.round(nameCountry.consolidated_weather?.[0].the_temp)) * 9 / 5) + 32)}{'\u00b0'}F</p> :
              <p>{Math.round(nameCountry.consolidated_weather?.[0].the_temp)}{'\u00b0'}C</p>
          }
          <p>{nameCountry.consolidated_weather?.[0].weather_state_name}</p>
          <p>{showDate}</p>
          <h2>{nameCountry.title}</h2>
        </div>
        <div className="weather">
          <div className="covert">
            <button onClick={() => setFahren(true)}> {'\u00b0'}F</button>
            <button onClick={() => setFahren(false)}>{'\u00b0'}C</button>
          </div>
          <OtherWeather isFahrentheint={isFahrentheint} />
          <WeatherDetail />
        </div>
      </div>
    </>
  )
}
export default CountryName;