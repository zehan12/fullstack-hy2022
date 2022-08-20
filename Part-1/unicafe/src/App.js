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
        <Button fn={() => setGood(good + 1)} text={"good"} />
        <Button fn={() => setNeutral(neutral + 1)} text={"neutral"} />
        <Button fn={() => setBad(bad + 1)} text={"bad"} />
      </div>

      <h2>statics</h2>
      {
        (good || neutral || bad) ?
          <>
            <Statistics text={"good"} val={good} />
            <Statistics text={"neutral"} val={neutral} />
            <Statistics text={"bad"} val={bad} />
            <Statistics text={"average"} val={ good+0-bad/good+bad+neutral || 0 } />
            <Statistics text={"percentage"} val={good/good+bad+neutral*100 + "%" || 0} />
          </>
          : <p>No feedback given</p>
      }
    </div>
  )
}

const Button = ({ text, fn }) => {
  return <button onClick={fn}>{text}</button>
}

const Statistics = ({ text, val }) => {
  // ...
  return <div>
    <p> {text}: {val}</p>
  </div>
}


export default App