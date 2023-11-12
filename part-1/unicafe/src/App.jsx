import { useState } from 'react'

const FeedbackButtons = ({setGood, setNeutral, setBad}) => {
  return(
    <>
      <button onClick={() => {setGood(prevGood => prevGood + 1)}}>good</button>
      <button onClick={() => {setNeutral(prevNeutral => prevNeutral + 1)}}>neutral</button>
      <button onClick={() => {setBad(prevBad => prevBad + 1)}}>bad</button>
    </>
  )
}

const Statistics = ({good, neutral, bad}) => {
  const total = good + neutral + bad
  if (total !== 0) {
    return (
      <>
        <p>good {good}</p>
        <p>neutral {neutral}</p>
        <p>bad {bad}</p>
        <p>all {total}</p>
        <p>average {((good * 1) + (bad * -1) + (neutral * 0)) / total}</p>
        <p>positive {(good / total)*100} %</p>
      </>
    )
  } else {
    return (
      <p>No feedback given</p>
    )
  }
 
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>Give feedback</h1>
      <FeedbackButtons setGood={setGood} setNeutral={setNeutral} setBad={setBad}/>
      <h1>Statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App