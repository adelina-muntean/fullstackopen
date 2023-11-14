import { useState } from 'react'

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

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]) 
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
      setPersons(persons.concat(personObj))
      setNewName('')
      setNewNumber('')
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      filter shown with <input value={filter} onChange={(event) => setFilter(event.target.value)}/>
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