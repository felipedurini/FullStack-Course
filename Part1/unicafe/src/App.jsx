import { useState } from 'react'

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const Title = ({ text }) => (
  <h1>
    {text}
  </h1>
)

const StatisticLine  = ({ title, text }) => (
  <tr>
    <td>{title}</td>
    <td>{text}</td>
  </tr>
)

const Statistics = (props) => {
  if(props.total > 0){
    return (
      <>
        <Title text='statistics' />
        <table>
          <tbody>
              <StatisticLine title='good' text={props.good} />
              <StatisticLine title='neutral' text={props.neutral} />
              <StatisticLine title='bad' text={props.bad} />
              <StatisticLine title='all' text={props.total} />
              <StatisticLine title='average' text={props.average} />
              <StatisticLine title='positive' text={`${props.good / props.total * 100}%`} />
          </tbody>
        </table>
      </>
    );
    
  }
  else{
    return (
      <>
        <Title text="statistics" />
        <p>No feedback given</p>
      </>
    )
  }
};


const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)
  const [points, setPoints] = useState(0)
  const [average, setAverage] = useState(0)

  const handleGoodClick = () => {
    const updatedGood = good + 1
    setGood(updatedGood)

    const updatedTotal = updatedGood + neutral + bad
    setTotal(updatedTotal)

    const updatedPoints = points + 1
    setPoints(updatedPoints)

    setAverage(updatedPoints / updatedTotal)
  }

  const handleNeutralClick = () => {
    const updatedNeutral = neutral + 1
    setNeutral(updatedNeutral)

    const updatedTotal = updatedNeutral + good + bad
    setTotal(updatedTotal)

    setAverage(points / updatedTotal)
  }

  const handleBackClick = () => {
    const updatedBad = bad + 1
    setBad(updatedBad)

    const updatedTotal = updatedBad + neutral + good
    setTotal(updatedTotal)

    const updatedPoints = points - 1
    setPoints(updatedPoints)

    setAverage(updatedPoints / updatedTotal)
  }

  return (
    <>
      <Title text = 'give feedback' />
      <Button handleClick={handleGoodClick} text = 'good' />
      <Button handleClick={handleNeutralClick} text = 'neutral' />
      <Button handleClick={handleBackClick} text = 'bad' />
      <Statistics 
          good={good} 
          neutral={neutral} 
          bad={bad} 
          total={total} 
          average={average} 
      />

    </>
  )
}

export default App