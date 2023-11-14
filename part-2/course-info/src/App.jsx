// const Total = ({parts}) => {
//   return (
//     <p>Number of exercises {parts[0].exercises + parts[1].exercises + parts[2].exercises}</p>
//   )
// }

const Header = ({name}) => {
  return(
    <h1>{name}</h1>
  )
}

const Part = ({part}) => {
  return (
    <p>{part.name} {part.exercises}</p>
  )
}

const Content = ({parts}) => {
  return (
    <div>
      {parts.map(part =>
        <Part key={part.name} part={part} />
      )}
    </div>
  )
}

const Course = ({course}) => {
  return (
    <>
      <Header name={course.name} />
      <Content parts={course.parts} />
    </>
  )
}

const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
    ]
  }

  return <Course course={course} />
}

export default App