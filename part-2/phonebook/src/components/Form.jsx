import personsService from '../services/PersonsService'

const Form = ({persons, setPersons, newName, setNewName, newNumber, setNewNumber, setMessage}) => {
    const handleNameInput = (event) => {
        const name = event.target.value
        setNewName(name)
    }
    
    const handleNumberImput = (event) => {
    const number = event.target.value
    setNewNumber(number)
    }

    const resetForm = () => {
        setNewName('')
        setNewNumber('')
    }
    
    const handleAddClick = (event) => {
        event.preventDefault()
        const personObj = {
            name: newName.trim(),
            number: newNumber.trim()
        }

        if (persons.some(person => person.name === personObj.name)) {
            if (window.confirm(`${newName} already exists in the phonebook. Do you want to update its number?`)) {
                const personToUpdate = persons.filter(person => person.name === newName)
                personsService.update(personToUpdate[0].id, personObj)
                resetForm()
                setMessage(
                    `'${personObj.name}' was updated`
                )
                  setTimeout(() => {
                    setMessage(null)
                }, 5000)
            }
        } else {
            personsService.create(personObj).then(response => {
                setPersons(persons.concat(personObj))
                resetForm()
                setMessage(
                    `'${personObj.name}' was added`
                )
                  setTimeout(() => {
                    setMessage(null)
                }, 5000)
            })
        }    
    }

    return (
        <>
            <h2>Add new contact</h2>
            <form>
                <div>
                name: <input value={newName} onChange={handleNameInput}/>
                </div>
                <div>
                number: <input value={newNumber} onChange={handleNumberImput}/>
                </div>
                <div>
                <button type="submit" onClick={handleAddClick}>add</button>
                </div>
            </form>
        </>
    )
}

export default Form
