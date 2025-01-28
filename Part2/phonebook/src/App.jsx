import { useState } from 'react'
import Persons from './components/Persons'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'


const App = () => {
  const [persons, setPersons] = useState([
    { id: 'Arto Hellas',
      name: 'Arto Hellas',
      phone: '153676565' }
  ]) 
  const [filter, setFilter] = useState('');
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [personsMap, setPersonsMap] = useState(new Map([ // so that time complexity when checking if it already belongs to the phonebook is O(1) (I would have used only this set and reduce space complexity, but the array "persons" was given in the assignment)

    [
      'Arto Hellas',
      {
        id: 'Arto Hellas',
        name: 'Arto Hellas',
        phone: '153676565',
      },
    ],
  ]))

  const addPerson = (event) => {
    event.preventDefault()
    const personObject = {
      id: newName,
      name: newName,
      phone: newNumber
    }
    console.log(personObject);
    
    if(!personsMap.has(personObject.id.toLocaleLowerCase())){
      setPersonsMap(personsMap.set(personObject.id.toLowerCase(), personObject))
      setPersons(persons.concat(personObject))
      setNewName('')
      setNewNumber('')
    }else{
      alert(`${newName} is already added to phonebook`)
    }
  }
  
  const handleNameChange = (event) => {
    console.log(personsMap)
    console.log(persons)
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    console.log(personsMap)
    console.log(persons)
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const personsToShow = filter
  ? persons.filter((person) =>
      person.name.toLowerCase().includes(filter.toLowerCase())
    )
  : persons;

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filter = {filter} onChange = {handleFilterChange} />

      <h2>add a new</h2>

      <PersonForm 
        addPerson={addPerson} 
        newName={newName} 
        handleNameChange={handleNameChange} 
        newNumber={newNumber} 
        handleNumberChange={handleNumberChange} 
      />

      <h2>Numbers</h2>
          <Persons persons = {personsToShow}/>
      </div>
  )
}

export default App