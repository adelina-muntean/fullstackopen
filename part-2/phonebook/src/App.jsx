import { useState } from 'react'

const Person = ({person}) => {
  return (
    <p>{person.name}</p>
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

  const handleNameInput = (event) => {
    const name = event.target.value
    setNewName(name)
  }

  const handleClick = (event) => {
    event.preventDefault()
    const personObj = {
      name: newName
    }

    if (persons.find((person) => person.name === newName)) {
      alert(`${newName} is already added to phonebook`);
    } else {
      setPersons(persons.concat(personObj));
      setNewName('');
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
          <button type="submit" onClick={handleClick}>add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <Persons persons={persons} />
    </div>
  )
}

export default App