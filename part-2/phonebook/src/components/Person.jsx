import PersonsService from '../services/PersonsService'

const Person = ({ person, setErrorMessage}) => {
    const handleDeleteButton = (id) => {
        if (window.confirm(`Do you really want to delete ${person.name}?`)) {
            PersonsService.deletePerson(id)
        }
    }

    return (
      <>
        <div className='contact'>
          <p>{person.name} {person.number}</p>
          <button onClick={() => handleDeleteButton(person.id)} className='delete-btn'>delete</button>
        </div>
      </>
    )
}

export default Person