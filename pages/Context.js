import React, { createContext , useState , useEffect} from 'react'

const Context = createContext();
const URL = `https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/search/?query=`

function ContextProvider({ children}) {
  const [nameCountry, setNameCountry] = useState([]);
  const [weather , setWeather] = useState([]);
  const [name, setName] = useState("london");
  const Api = `${URL}${name}`;
  const fetchData = async () => {
    const res = await fetch(Api);
    const data = await res.json();
    setNameCountry(data);
    if (data.length) {
      const weahterData = await fetch(`https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/${data[0].woeid}`);
      const allData = await weahterData.json();
      setNameCountry(allData);
    }
  }
  useEffect(() => {
    fetchData()
  }, [])

  return <Context.Provider value = {{setNameCountry , nameCountry , weather , setWeather}}>
    {children}
  </Context.Provider>
}
export { Context, ContextProvider }
