import { useState } from 'react'
import './App.css'
import axios from "axios";
import { useEffect } from 'react';
// https://samples.openweathermap.org/data/2.5/weather?q=London&appid=b1b15e88fa797225412429c1c50c122a1

function App() {
  const [countries, setCountries] = useState([]);
  const [query, setQuery] = useState(null);
  const [display, setDisplay] = useState("")
  const [result, setResult] = useState([])

  const findCountry = (e) => {
    setQuery(e.target.value)
    const result = countries.filter((country) => country?.name?.common?.split(" ")[0].toLowerCase().includes(query.toLowerCase()));
    if (result.length !== 1 && result.length > 4) return setResult(result.splice(0, 4));
    if (result.length !== 1) return setResult(result)
    if (result.length === 1) return setDisplay(result[0]);
  }

  const handleClick = (country) => {
    setDisplay(country)
  }

  // useEffect( ()=>{

  // } )

  const getWeather = async ( country ) => {
    const data = await axios.get(`https://samples.openweathermap.org/data/2.5/weather?q=${country.toUpperCase()}&appid=b1b15e88fa797225412429c1c50c122a1
    `)
    console.log(data)
  }

  const getAllCountries = async () => {
    const { data } = await axios.get("https://restcountries.com/v3.1/all")
    setCountries(data.flat(Infinity))
  }

  useEffect(() => {
    getAllCountries()
    getWeather("india")
  }, [])

  console.log(display)
  return (
    <div className="App" >
      <input type="text" value={query} name="query" onChange={(e) => findCountry(e)} />
      {
        result.length &&
        result.map((country) => (
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }} >
            <h3>{country.name.common}</h3>
            <button style={{ height: "20px" }} onClick={() => handleClick(country)}>show</button>
          </div>)
        )
      }
      {
        display &&
        <>
          <h1>{display.name.common}</h1>
          <img src={display.flags.png} />
          <p>continent: {display.continents[0]}</p>
          <p>capital:{display.capital[0]}</p>
          <p>population: {display.population}</p>
          <h5>Languages</h5>
          {
           Object.entries(display.languages).map(((e, i) => <li>{e[i]}</li>))
          }

        </>

      }
    </div>
  )
}

export default App
