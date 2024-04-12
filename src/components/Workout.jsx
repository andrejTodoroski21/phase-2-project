import { useState } from "react"

function Workout({workout, workouts, setWorkouts}){
    const [flipped, setFlipped] = useState(true)

    function flipWorkout(){
        setFlipped(!flipped)
    }

    function handleReps(){
        fetch(`http://localhost:3000/workouts/${workout.id}`,{
            method: "PATCH",
            header:{
                'Content-type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({reps:workout.reps+1})
        })
        .then(res => res.json())
        .then(updatedReps => {
           const updatedRepData =  workouts.map(rep =>{
            if(rep.id !== updatedReps.id){
                return rep
            }else{
                return updatedReps
            }
           })
           setWorkouts(updatedRepData)
        })
    }

    function handleSets(){
        fetch(`http://localhost:3000/workouts/${workout.id}`,{
            method: "PATCH",
            header:{
                'Content-type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({sets:workout.sets+1})
        })
        .then(res => res.json())
        .then(updatedSets => {
           const updatedSetData =  workouts.map(set =>{
            if(set.id !== updatedSets.id){
                return set
            }else{
                return updatedSets
            }
           })
           setWorkouts(updatedSetData)
        })
    }

    function handleWeight(){
        fetch(`http://localhost:3000/workouts/${workout.id}`,{
            method: "PATCH",
            header:{
                'Content-type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({weight:workout.weight+5})
        })
        .then(res => res.json())
        .then(updatedWeights => {
           const updatedWeightData =  workouts.map(weight =>{
            if(weight.id !== updatedWeights.id){
                return weight
            }else{
                return updatedWeights
            }
           })
           setWorkouts(updatedWeightData)
        })
    }

    function handleDeleteWorkout(){
        fetch(`http://localhost:3000/workouts/${workout.id}`,{
            method: 'DELETE'
        })
        const filteredWorkouts = workouts.filter(w => w.id !== workout.id)
        setWorkouts(filteredWorkouts)

    }








    return(
        <div className="style-workout">
            <div className="workout-item" onClick={flipWorkout}>
                {flipped ? 
                    <img src={workout.image} alt={workout.title}/>
                    :
      <>
        <h3>{workout.name}</h3>
        <h4>{workout.description}</h4>
      </>
      }
    </div>

      <button onClick={handleReps}>{workout.reps} reps</button>
      <button onClick={handleSets}>{workout.sets}  sets</button>
      <button onClick={handleWeight}>{workout.weight} weight</button>
      <button onClick ={handleDeleteWorkout}>Remove</button>
        </div>
    )
}

export default Workout