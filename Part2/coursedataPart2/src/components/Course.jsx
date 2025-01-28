import Header from './components/Header'
import Note from './components/Note'

const Course = ({ course }) => {

  const totalExercises = course.parts.reduce((sum, part) => sum + part.exercises, 0)
  
  return (
    <>      
    <Header text= {course.name}></Header>
    <ul>
      {course.parts.map(c => 
        <Note key={c.id} note = {c} />
      )}
    </ul>
    <h2>Total of {totalExercises} exercises</h2>
    </>
  )
  }
  
  export default Course