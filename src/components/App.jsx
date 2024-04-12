import { useState, useEffect } from 'react'
import WorkoutContainer from "./WorkoutContainer"
import WorkoutForm from "./WorkoutForm"

function App() {
  
  const [workouts, setWorkouts] = useState([])

  useEffect(()=> {
    fetch('http://localhost:3000/workouts')
    .then(response => response.json())
    .then(workout => setWorkouts(workout))
  },[])
  console.log(workouts)


  return (
    <div className='App'>
      {/* div for the title */}
      <div id='title'>
        <h1 id='elite-power' >Elite <span id='p'>P</span>owe<span id='r'>r</span></h1>
      </div>

      <main>
        <div className='flex-container'>
          <WorkoutContainer workouts={workouts} setWorkouts={setWorkouts}/>
        </div>
      </main>
      
      <WorkoutForm setWorkouts={setWorkouts}/>

    </div>
  )
}

export default App
