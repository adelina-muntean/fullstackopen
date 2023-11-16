const Person = ({person}) => {
    return (
      <div className='contact'>
        <p>{person.name} {person.number}</p>
        <button className='delete-btn'>delete</button>
      </div>
    )
}

export default Person