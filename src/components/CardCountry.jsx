import axios from 'axios'
import React, { useEffect, useState } from 'react'


const CardCountry = ({countryName}) => {

  const [country, setCountry] = useState({})

  useEffect(() => {
    const URL= `https://restcountries.com/v2/name/${countryName}`
    axios.get(URL)
    .then(res => setCountry(res.data[0]))
    .catch(err => console.log(err.message))
  }, [])
 
  return (
   <article className='container'>
    <img src={country.flags?.svg} alt="" />
    <ul>
      <li><b>Country:</b>{country.name}</li>
      <li><b>Denomination: </b>{country.altSpellings?.[1]}</li>
      <li><b>Population: </b>{country.population}</li>
      <li><b>Capital: </b>{country.capital}</li>
      <li><b>Time Zone: </b>{country.timezones?.[0]}</li>
      <li><b>Native Languages: </b>{country.languages?.[0].nativeName}</li>
    </ul>
   </article>
  )
}

export default CardCountry