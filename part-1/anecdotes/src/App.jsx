import { useState } from 'react'
import './styles.css'

const AnectodeMostVotes = ({anecdotes, votes}) => {
  const maxVotes = Math.max(...votes); // obtain biggest number in the votes array
  const indexMaxVotes = votes.indexOf(maxVotes); // obtain the index of the biggest number
  if (maxVotes !== 0) {
    return (
      <>
        <p>{anecdotes[indexMaxVotes]}</p>
        <p>has {maxVotes} votes</p>
      </>
    )
  }
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const randomNumber = () => {
    return Math.floor(Math.random() * anecdotes.length)
  }

  const voteBtnHandler = () => {
    const newVotes = [ // create a copy of the votes array
      ...votes 
    ]
    newVotes[selected] += 1 // add one at the position corresponding to the current anectdote
    setVotes(newVotes) // setting the original votes array to the copy we created above (new array) bc state cannot be directly changed
  }

  const [selected, setSelected] = useState(randomNumber)
  const [votes, setVotes] = useState(new Uint8Array(anecdotes.length)) // the initial value of votes is an array of zeroes

  return (
    <div>
      <h1>Anecdote of the day</h1>
      {anecdotes[selected]}
      <p>has {votes[selected]} votes</p>
      <div className='buttons'>
        <button onClick={() => voteBtnHandler(selected)}>vote</button>
        <button onClick={() => setSelected(randomNumber)}>next anecdote</button>
      </div>

      <h1>Anecdote with most votes</h1>
      <AnectodeMostVotes anecdotes={anecdotes} votes={votes}/>
    </div>
  )
}

export default App