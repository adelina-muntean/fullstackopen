import { useState, useEffect } from 'react'
import axios from 'axios'
import './styles.css'
import Filter from './components/Filter'
import Form from './components/Form'
import Contacts from './components/Contacts'
import Notification from './components/Notification'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')
  const [message, setMessage] = useState(null)

  const personsToShow = persons.filter(person => person.name.toLowerCase().includes(filter.toLowerCase()))

  useEffect(() => {
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        setPersons(response.data)
      })
  }, [persons])

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={message} setMessage={setMessage} />
      <Filter filter={filter} setFilter={setFilter} />
      <Form persons={persons} 
            setPersons={setPersons} 
            newName={newName} 
            setNewName={setNewName} 
            newNumber={newNumber} 
            setNewNumber={setNewNumber} 
            setMessage={setMessage}/>
      <Contacts persons={persons} personsToShow={personsToShow} filter={filter} />
    </div>
  )
}

export default App