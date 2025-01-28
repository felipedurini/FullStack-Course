const Persons = ({ persons }) => {
  console.log(persons)
  return (
      <ul>
          {persons.map(p => 
              <li key={p.id}>{p.name} {p.phone}</li>
          )}
      </ul>
  )
}
  
  export default Persons