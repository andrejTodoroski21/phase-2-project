import React from "react";
import WorkoutContainer from "../WorkoutContainer"
import { useState, useEffect } from "react";


function Home(){
    const [workouts, setWorkouts] = useState([])

  useEffect(()=> {
    fetch('http://localhost:3000/workouts')
    .then(response => response.json())
    .then(workout => setWorkouts(workout))
  },[])
  console.log(workouts)
    return (
        <div>
            <div className='flex-container'>
          <WorkoutContainer workouts={workouts} setWorkouts={setWorkouts}/>
        </div>
  
        </div>
    )
}
export default Home