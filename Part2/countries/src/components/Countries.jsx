
const Countries = ({ countries, onShowCountry }) => {
  return (
    countries.length === 1 ? 
    <div>
        <h1>{countries[0].name.common}</h1>
        <button onClick={() => onShowCountry(countries[0])}>Show</button>
        <p>capital: {countries[0].capital[0]}</p>
        <p>area: {countries[0].area}</p>
        <ul>
            {Object.keys(countries[0].languages).map((l) => (
                <li key = {l}>{countries[0].languages[l]}</li>
            ))}
            <img src={countries[0].flags.png} alt="flag" />
        </ul>        
    </div>
    :
        <ul>
        {countries.map(c => 
            <li key={c.name.common}>
            {c.name.common}
            <button onClick={() => onShowCountry(c)}>Show</button>
            </li>
        )}
        </ul>
  )
}


export default Countries
