// this route should be a home page and not display the workouts, that will be in another route

// import React from "react";
// import WorkoutContainer from "../WorkoutContainer"
// import { useState, useEffect } from "react";


// function Home(){
//     const [workouts, setWorkouts] = useState([])

//   useEffect(()=> {
//     fetch('api/workouts')
//     .then(response => response.json())
//     .then(workout => setWorkouts(workout))
//   },[])
//   console.log(workouts)
//     return (
//         <div>
//             <div className='flex-container'>
//           <WorkoutContainer workouts={workouts} setWorkouts={setWorkouts}/>
//         </div>
  
//         </div>
//     )
// }
// export default Home

import React from "react";

function Home(){
  return (
    <div>
      <video autoPlay muted loop id="home-video">
        <source src="https://assets.newyorksportsclubs.com/wp-content/uploads/2023/10/04072014/Sizzle-Reel-60-second.mp4" type="video/mp4" />
      </video>
    </div>
  )
}

export default Home