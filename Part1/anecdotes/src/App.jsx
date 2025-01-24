import { useState } from 'react'

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

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

  const [selected, setSelected] = useState(Math.floor(Math.random() * anecdotes.length))
  const [votes, setVotes] = useState(new Uint8Array(anecdotes.length))
  const [maxIndex, setMax] = useState(0)
  
  const handlePhraseClick = () => {
    const updatedPhrase = Math.floor(Math.random() * anecdotes.length)
    setSelected(updatedPhrase)
  }

  
  const handleVote = () => {
    const updatedVotes = [...votes]

    if(updatedVotes[selected] + 1 > updatedVotes[maxIndex]){
      setMax(selected)
    }

    updatedVotes[selected] = updatedVotes[selected] + 1
    setVotes(updatedVotes)    
  }

  return (
    <div>
      <h2>Anecdote of the day</h2>
      <h4>{anecdotes[selected]}</h4>
      <Button handleClick={handlePhraseClick} text = 'next anecdote' />
      <Button handleClick={handleVote} text = 'vote' />
      <h2>Anecdote with most votes</h2>
      <h4>{anecdotes[maxIndex]} has {votes[maxIndex]} votes</h4>
    </div>
  )
}

export default App