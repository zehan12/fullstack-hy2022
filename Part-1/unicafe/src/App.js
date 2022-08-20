import { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h2>give feedback</h2>
      <div style={{ display: "flex" }}>
        <button onClick={() => setGood(good + 1)} >good</button>
        <button onClick={() => setNeutral(neutral + 1)}>neutral</button>
        <button onClick={() => setBad(bad + 1)}>bad</button>
      </div>

      <h2>statics</h2>
      {
        (good || neutral || bad) ?
          <>
            <Statistics text={"good"} val={good} />
            <Statistics text={"bad"} val={bad} />
            <Statistics text={"neutral"} val={neutral} />
          </>
          : <p>No feedback given</p>
      }
    </div>
  )
}

const Statistics = ({ text, val }) => {
  // ...
  return <div>
    <p> {text}: {val}</p>
  </div>
}


export default App