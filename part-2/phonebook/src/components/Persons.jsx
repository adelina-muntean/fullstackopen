import Person from "./Person"

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

export default Persons