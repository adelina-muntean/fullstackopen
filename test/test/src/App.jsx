import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  var animals = [
    { name: 'mipu', species: 'hamster'},
    { name: 'jazz', species: 'dog'},
    { name: 'rocky', species: 'dog'},
    { name: 'eme', species: 'cat'}
  ]

  var dogs = animals.filter(function(animal) {
    return animal.species === 'dog'
  })

  function clickHandle() {
   console.log(dogs)
  }

  return (
    <>
      <p>hola</p> 
      <button onClick={clickHandle}>btn</button>       
    </>
  )
}

export default App
