import React, { createContext, useState, useEffect } from 'react'

const Context = createContext();
const URL = `https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/search/?query=`

function ContextProvider({ children }) {
  const [nameCountry, setNameCountry] = useState([]);
  const [city, setCity] = useState([]);
  const [name, setName] = useState("london");

  const fetchData = async (country) => {
    const Api = `${URL}${country}`;
    const res = await fetch(Api);
    const data = await res.json();
    setNameCountry(data);
    if (data.length) {
      const weahterData = await fetch(`https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/${data[0].woeid}`);
      const allData = await weahterData.json();
      setNameCountry(allData);
    }
  }
  const fetchApi = async (input) => {
    const API = `${URL}${input}`
    const res = await fetch(API);
    const data = await res.json();
    setCity(data);
    console.log(data);
  }
  console.log(city);
  useEffect(() => {
    fetchData(name)
    fetchApi()
  }, [])

  return <Context.Provider value={{ setNameCountry, nameCountry, name, setName, fetchData, city, setCity, fetchApi }}>
    {children}
  </Context.Provider>
}
export { Context, ContextProvider }
