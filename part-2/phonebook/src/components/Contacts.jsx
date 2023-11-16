import Persons from './Persons'

const Contacts = ({persons, personsToShow, filter}) => {
    return (
        <>
            <h2>Contacts</h2>
            <Persons persons={persons} personsToShow={personsToShow} filter={filter}/>
        </>
    )
}

export default Contacts
