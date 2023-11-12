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

const StatisticLine = ({text, value, text2}) => {
  return (
    <p>{text} {value} {text2}</p>
  )
}

const Statistics = ({good, neutral, bad}) => {
  const total = good + neutral + bad
  if (total !== 0) {
    return (
      <>
        <StatisticLine text="good" value={good}/>
        <StatisticLine text="neutral" value={neutral}/>
        <StatisticLine text="bad" value={bad}/>
        <StatisticLine text="all" value={total}/>
        <StatisticLine text="average" value={((good * 1) + (bad * -1) + (neutral * 0)) / total}/>
        <StatisticLine text="positive" value={(good / total)*100} text2="%"/>
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