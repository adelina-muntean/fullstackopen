// const Header = ({course}) => {
//   return(
//     <h1>{course}</h1>
//   )
// }

// const Content = ({parts}) => {
//   return (
//     <div>
//       <Part part={parts[0].name} exercises={parts[0].exercises}/>
//       <Part part={parts[1].name} exercises={parts[1].exercises}/>
//       <Part part={parts[2].name} exercises={parts[2].exercises}/>
//     </div>
//   )
// }

// const Part = ({part, exercises}) => {
//   return (
//     <p>
//       {part} {exercises}
//     </p>
//   )
// }

// const Total = ({parts}) => {
//   return (
//     <p>Number of exercises {parts[0].exercises + parts[1].exercises + parts[2].exercises}</p>
//   )
// }

const Course = ({course}) => {
  console.log(course)
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