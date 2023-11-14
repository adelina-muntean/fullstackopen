import { useState } from 'react'

const Person = ({person}) => {
  return (
    <p>{person.name} {person.number}</p>
  )
}

const Persons = ({persons}) => {
  return (
    <>
      {persons.map(person => 
        <Person key={person.name} person={person}/>  
      )}
    </>
  )
}

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

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
      setPersons(persons.concat(personObj))
      setNewName('')
      setNewNumber('')
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
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
      <h2>Numbers</h2>
      <Persons persons={persons} />
    </div>
  )
}

export default App