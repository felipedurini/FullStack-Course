import Header from './components/Header'
import Part from './components/Part'

const Course = ({ course }) => {

  const totalExercises = course.parts.reduce((sum, part) => sum + part.exercises, 0)
  
  return (
    <>      
    <Header text= {course.name}></Header>
    <ul>
      {course.parts.map(c => 
        <Part key={c.id} part = {c} />
      )}
    </ul>
    <h2>Total of {totalExercises} exercises</h2>
    </>
  )
  }
  
  export default Course