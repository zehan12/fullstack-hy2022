import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.'
  ]

  const [selected, setSelected] = useState(0)
  const [vote, setVotes] = useState(Array(anecdotes.length).fill(0));
  const [most, setMost] = useState(0);
  const [mostIndex, setMostIndex] = useState("")


  const handleSelect = () => {
    if (selected === anecdotes.length - 1) return setSelected(0)
    if (selected < anecdotes.length) return setSelected(selected + 1)
  }

  const handleVote = (v) => {
    const copy = [...vote];
    copy[v] += 1
    let high = 0;
    let index = 0;

    for (let i = 0; i < copy.length; i++) {
      if (high < copy[i]) {
        high = copy[i];
        index = i;
       console.log("here", high)
      }
      console.log(high, copy[i], anecdotes[i])
    }
    setVotes([...copy]);
    setMost(high);
    setMostIndex(index);
    
  }




  return (<>
    <h1>Anecdotes of the day</h1>
    <div>
      <p>{anecdotes[selected]}</p>
      <p>has votes :{vote[selected]}</p>
    </div>
    <button onClick={handleSelect}> next anecdotes </button>
    <button onClick={() => handleVote(selected)}> vote </button>

    <div>
      <h2>Anecdotes with most votes</h2>
      <div>{anecdotes[vote.indexOf(Math.max(...vote))]}</div>
      <div>has {Math.max(...vote)} votes</div>
    </div>

    {
      most > 0 &&
      <div>
        <h2>Anecdotes with most votes</h2>
        <div>{anecdotes[mostIndex]}</div>
        <div>has {most} votes</div>
      </div>

    }

  </>
  )
}

export default App
