import { useState, useEffect } from 'react'
import countryService from './services/countries'
import Filter from './components/Filter'
import Countries from './components/Countries'


const App = () =>{
  const [countries, setCountries] = useState([])
  const [filter, setFilter] = useState('')
  const [selectedCountry, setSelectedCountry] = useState(null)


  useEffect(() => {
    countryService
      .getAll()
      .then(initialCountries => {
        setCountries(initialCountries)
      })
  }, [])
  
console.log(countries);

  const countriesToShow = filter
  ? countries.filter((country) =>
    country.name.common.toLowerCase().includes(filter.toLowerCase())
  )
  : countries

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  }

  const handleShowCountry = (country) => {
    setSelectedCountry(selectedCountry === country ? null : country);
  }

  return(
    <div>
        <Filter filter = {filter} onChange = {handleFilterChange} />

        {selectedCountry ?(
          <Countries countries = {[selectedCountry]} onShowCountry={handleShowCountry}/>)
          : countriesToShow.length > 10 ? (
            <p>Too many matches, specify another filter</p>) : (
            <Countries countries = {countriesToShow} onShowCountry={handleShowCountry}/> 
          )}

    </div>
  )
}
  
export default App