import React, { useState, useEffect } from "react";

function Program() {
  const [workouts, setWorkouts] = useState([]);


// fetch from the program route 
  // useEffect(()=>{
  //   fetch('api')
  //   .then((response)=> response.json())
  //   .then((data) = setWorkouts(data))
  // }, []);



  // useEffect(() => {
  //   fetch("api")
  //     .then((response) => response.json())
  //     .then((data) => setWorkouts(data.SavedWorkouts))
  //     .catch((error) => console.error("Error fetching workouts:", error));
  // }, []);

  // function handleRemoveSavedWorkout(workoutid){
  //   fetch(`http://localhost:3000/SavedWorkouts/${workoutid}`,{
  //           method: 'DELETE'
  //       })
  //       const filteredWorkouts = workouts.filter(w => w.id !== workouts.id)
  //       setWorkouts(filteredWorkouts)
  // }

  // return (
  //   <>
  //       <h1 className="savedworkout-title">Your Elite Power Gym Program</h1>
  //       <div className="saved-workouts">
  //           <body className="SW-body">
  //               {workouts.map((workout) => (
  //               <div key={workout.id}>
  //               <h3>{workout.exercise}</h3>
  //               <img src={workout.image} alt={workout.exercise} />
  //               <p className="saved-workout-info">{workout.reps} Reps</p>
  //               <p className="saved-workout-info">{workout.sets} Sets</p>
  //               <p className="saved-workout-info">{workout.weight} Lbs</p>
  //               <button id="handleRemoveSavedWorkout" onClick = {()=> handleRemoveSavedWorkout(workout.id)}>Remove from program</button>
  //               </div>
  //           ))}
            
  //           </body>
  //       </div>
  //   </>
  // );
}
export default Program