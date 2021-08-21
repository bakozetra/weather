import React, { useContext, useState } from 'react'
import { Context } from './Context'
import WeatherDetail from "../component/Weather"
import OtherWeather from '../component/OtherWeather';
import { SearchButton } from '../component/SearchButton';
import { CapitalCountryName } from '../component/places';
import { WrapperAll, WeatherInDetail, Covert, WrapperWeatherInDetail, WrapperLocation } from '../component/style';
import { Form } from '../component/Form';


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
    e.preventDefault();
    setName(e.target.id);
    fetchData(e.target.id);
    setIsLogging(!isLogging)
  }

  const temperature = () => {
    return (
      isFahrentheint ?
        <p><span>
          {(((Math.round(nameCountry.consolidated_weather?.[0].the_temp)) * 9 / 5) + 32)}</span>
          <span>{'\u00b0'}F</span></p>
        : <p><span>
          {Math.round(nameCountry.consolidated_weather?.[0].the_temp)}</span>
          <span>{'\u00b0'}C</span></p>
    )
  }
  var dateToday = new Date(nameCountry.consolidated_weather?.[0].applicable_date);
  const showDate = dateToday.toDateString();

  return (
    <WrapperAll className="container">
      < WrapperLocation className="dayToday">
        <SearchButton
          placeholder={'Search for a place'}
          text={'Search for places'}
          onClick={() => setIsLogging(!isLogging)} />
        <>
          <Form
            className={isLogging ? "showForm" : "form"}
            onClick={() => setIsLogging(false)}
            onChange={(e) => setInput(e.target.value)}
            Submit={Submit}
            value={input}
            search={'Search'}
            SubmitButton={SubmitButton}
            placeholder={'search location'} />
        </>

        <CapitalCountryName
          src={`https://www.metaweather.com/static/img/weather/${nameCountry.consolidated_weather?.[0].weather_state_abbr}.svg`}
          temp={temperature()}
          climat={nameCountry.consolidated_weather?.[0].weather_state_name}
          date={showDate}
          capital={nameCountry.title}
        />
      </WrapperLocation>
      <WrapperWeatherInDetail className="weather">
        <WeatherInDetail>
          <Covert className="covert">
            <button onClick={() => setFahren(false)}>{'\u00b0'}C</button>
            <button onClick={() => setFahren(true)}> {'\u00b0'}F</button>
          </Covert>
          <OtherWeather isFahrentheint={isFahrentheint} />
          <WeatherDetail />
        </WeatherInDetail>
      </WrapperWeatherInDetail>
    </WrapperAll>
  )
}
export default CountryName;