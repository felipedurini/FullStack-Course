import { useState, useEffect } from 'react'
import axios from 'axios'
import Course from './components/Course'

const App = () => {
  const [notes, setNotes] = useState([])

  const hook = () => {
    console.log('effect')
    axios
      .get('http://localhost:3001/courses')
      .then(response => {
        console.log('promise fulfilled')
        setNotes(response.data)
      })
  }
  
  useEffect(hook, [])
  console.log('render', notes.length, 'notes')

  return notes.map((course) => <Course key = {course.id} course={course} />) 
}

export default App
