import { useState } from 'react'
import './App.css'
import axios from "axios";
import { useEffect } from 'react';

function App() {
  const [countries, setCountries] = useState([]);
  const [query, setQuery] = useState(null);
  const [display, setDisplay] = useState([])
  const [result, setResult] = useState([])

  const findCountry = (e) => {
    setQuery(e.target.value)
    const result = countries.filter((country) => country?.name?.common?.split(" ")[0].toLowerCase().includes(query.toLowerCase()));
    if ( result.length !== 1 ) return setResult(result);
    if ( result.length === 1 ) return setDisplay(result);
  }

  const getAllCountries = async () => {
    const { data } = await axios.get("https://restcountries.com/v3.1/all")

    setCountries(data.flat(Infinity))
    console.log(countries)
  }

  useEffect(() => {
    getAllCountries()
  }, [])

  console.log(display,"di",display[name])
  return (
    <div className="App" >
      <input type="text" value={query} name="query" onChange={(e) => findCountry(e)} />
      {
        result.length &&
        result.map((country) => <h2>{country.name.common}</h2>)
      }
      {
         display.length && 
         <>
         <h1>{display[0].name.common}</h1>
         <img src={display[0].flags.png} />
         </>

      }
    </div>
  )
}

export default App
