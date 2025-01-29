const Persons = ({ persons, handler }) => {
  return (
      <ul>
          {persons.map(p => 
              <li key={p.id}>{p.name} {p.number}
              <button onClick={() => handler(p.id)}>delete</button>
              </li>
          )}
      </ul>
  )
}
  
  export default Persons