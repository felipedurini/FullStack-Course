import { useState, useEffect } from 'react'
import Persons from './components/Persons'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Notification from './components/Notification'
import personService from './services/persons'



const App = () => {
  const [persons, setPersons] = useState([]) 
  const [filter, setFilter] = useState('')
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('') 
  const [addedMessage, setAddedMessage] = useState(null)


    useEffect(() => {
      personService
        .getAll()
        .then(initialNotes => {
          setPersons(initialNotes)
        })
    }, [])

    const deletePerson = (id) =>{
      if(window.confirm(`¿Deseas eliminar a ${persons.find(p => p.id === id).name}`)){        
        personService.erase(id)
          .then(() => {
            setPersons(persons.filter(person => person.id !== id))
          })
          .catch(error => {
            alert("no se pudo eliminar")
            console.log(error)
          })
      }
    }

    const addPerson = (event) => {
      event.preventDefault()
      const personObject = {
        name: newName,
        number: newNumber,
        important: Math.random() > 0.5,
      }

      const foundPerson = persons.find(person => person.name.toLowerCase() === personObject.name.toLowerCase())
      
      if (!foundPerson) {
      personService
          .create(personObject)
          .then(returnedPerson => {
            setPersons(persons.concat(returnedPerson))
            setNewName('')
            setNewNumber('')
          })
          setAddedMessage(
            `Added ${newName}`
          )
          setTimeout(() => {
            setAddedMessage(null)
          }, 5000)
      }

      else{
          if(window.confirm(`${newName} ya pertenece a la agenda, ¿Desea cambiar su número?`)){
            const updatedPerson = { ...foundPerson, number: newNumber }
            personService.update(foundPerson.id, updatedPerson)
            .then(returnedPerson => {
              setPersons(persons.map(p => (p.id === foundPerson.id ? returnedPerson : p)))
              setNewName('')
              setNewNumber('')
            })
            .catch(error => {
              alert(`No se pudo actualizar a ${foundPerson.name}, puede que haya sido eliminado.`)
              console.log(error)            
              setPersons(persons.filter(p => p.id !== foundPerson.id))
            });
          }
      }
    }



  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
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
      <h1>Phonebook</h1>
      <Notification message={addedMessage} />


      <Filter filter = {filter} onChange = {handleFilterChange} />

      <h1>add a new contact</h1>

      <PersonForm 
        addPerson={addPerson} 
        newName={newName} 
        handleNameChange={handleNameChange} 
        newNumber={newNumber} 
        handleNumberChange={handleNumberChange} 
      />

      <h1>Numbers</h1>
          <Persons persons = {personsToShow} handler = {deletePerson}/>
      </div>
  )
}

export default App