const Header = ({name}) => {
    return(
      <h2>{name}</h2>
    )
}
  
const Part = ({part}) => {
    return (
        <p>{part.name} {part.exercises}</p>
    )
}

const Content = ({parts}) => {
    return (
        <>
        {parts.map(part =>
            <Part key={part.id} part={part} />
        )}
        </>
    )
}

const Total = ({parts}) => {
    const totalExercises = parts.reduce((sum, part) => sum + part.exercises, 0)
    return (
        <>
        <p style={{ fontWeight: 'bold' }}>Total exercises: {totalExercises}</p>  
        </>
    )
}

const Course = ({course}) => {
    return (
        <>
        <Header name={course.name} />
        <Content parts={course.parts} />
        <Total parts={course.parts} />
        </>
    )
}

export default Course