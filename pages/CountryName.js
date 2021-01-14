import React, { useContext , useState } from 'react'
import { Context } from './Context'

const CountryName = () => {
  const {nameCountry , setName , fetchData } = useContext(Context);
  console.log(nameCountry);
  console.log(nameCountry.consolidated_weather?.[0].humidity);
  const [input, setInput] = useState("")
  const [isLogging, setIsLogging] = useState(false);
  const [nextDay , setNextDay] = useState();
  const [temp , setTemp] = useState(false);
   function SubmitButton (e) {
     e.preventDefault();
     setName(input);
     fetchData();
   } 
   function WeatherNextDay(id) {
     console.log(id);
     const newDay = nameCountry.consolidated_weather?.filter( weahterId => weahterId === id)
     console.log(newDay);
     setNextDay(newDay);
   }

   console.log(nextDay);
   var dateToday = new Date(nameCountry.consolidated_weather?.[0].applicable_date);
   const showDate = dateToday.toDateString();
  return (
    <div>
      <div>
        <button placeholder="Search for a place"
          onClick={() => setIsLogging(!isLogging)}
        >Search for a place</button>
        <button>F</button>
        <button>C</button>
        {isLogging && (
          <form>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)} />
            <button onClick={SubmitButton}>Search</button>
          </form>
        )}
        <div>
          <h2>{nameCountry.title}</h2>
        </div>
      </div>
      <div>
        <p>{nameCountry.consolidated_weather?.[0].weather_state_name}</p>
        <p>{showDate}</p>
        <img src={`https://www.metaweather.com/static/img/weather/${nameCountry.consolidated_weather?.[0].weather_state_abbr}.svg`} />
        <p>{nameCountry.consolidated_weather?.[0].the_temp}{'\u00b0'}</p>
        <p>{showDate}</p>
      </div>
      <div className = "weather">
        {
          nameCountry.consolidated_weather?.slice(1).map(degree => {
            var mydate = new Date(degree.applicable_date);
            const dates = mydate.toDateString();
            return <div onClick= {() => WeatherNextDay(degree.id)}>
              <p>{dates}</p>
              <img src={`https://www.metaweather.com/static/img/weather/${degree.weather_state_abbr}.svg`} />
              <div>
              </div>
            </div>
          })
        }
      </div>
      <div>
        <article>
          <p>Wind status</p>
          <p>{nextDay}</p>
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