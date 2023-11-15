import { useState, useEffect } from 'react'
import axios from 'axios'
import personsService from './services/Persons'

const Person = ({person}) => {
  return (
    <p>{person.name} {person.number}</p>
  )
}

const Persons = ({persons, personsToShow, filter}) => {
  if (filter.length === 0) {
    return (
      <>
        {persons.map(person => 
          <Person key={person.name} person={person}/>  
        )}
      </>
    )
  } else {
    return (
      <>
        {personsToShow.map(person => 
          <Person key={person.name} person={person}/>  
        )}
      </>
    )
  }
}

const Filter = ({filter, setFilter}) => {
  return (
    <>
      filter shown with <input value={filter} onChange={(event) => setFilter(event.target.value)}/>    
    </>
  )
}

const App = () => {
  const [persons, setPersons] = useState([]) 

  useEffect(() => {
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        setPersons(response.data)
      })
  }, [])

  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')

  const personsToShow = persons.filter(person => person.name.toLowerCase().includes(filter.toLowerCase()))

  const handleNameInput = (event) => {
    const name = event.target.value
    setNewName(name)
  }

  const handleNumberImput = (event) => {
    const number = event.target.value
    setNewNumber(number)
  }

  const handleClick = (event) => {
    event.preventDefault()
    const personObj = {
      name: newName.trim(),
      number: newNumber.trim()
    }

    if (persons.find((person) => JSON.stringify(person) === JSON.stringify(personObj))) {
      alert(`${newName} is already added to phonebook`)
    } else {
      personsService.create(personObj).then(response => {
        setPersons(persons.concat(personObj))
        setNewName('')
        setNewNumber('')
      })
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filter={filter} setFilter={setFilter} />
      <h2>Add new contact</h2>
      <form>
        <div>
          name: <input value={newName} onChange={handleNameInput}/>
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNumberImput}/>
        </div>
        <div>
          <button type="submit" onClick={handleClick}>add</button>
        </div>
      </form>
      <h2>Contacts</h2>
      <Persons persons={persons} personsToShow={personsToShow} filter={filter}/>
    </div>
  )
}

export default App