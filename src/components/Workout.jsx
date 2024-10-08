import { useState } from "react"

function Workout({workout, workouts, setWorkouts}){
    
    
    
    // const [flipped, setFlipped] = useState(true)
    // const [savedWorkouts, setSavedWorkouts] = useState([]);

    // function flipWorkout(){
    //     setFlipped(!flipped)
    // }

    // function incramentReps(){
    //     fetch(`http://localhost:3000/workouts/${workout.id}`,{
    //         method: "PATCH",
    //         headers:{
    //             'Content-type': 'application/json',
    //             'Accept': 'application/json'
    //         },
    //         body: JSON.stringify({reps: workout.reps + 1})
    //     })
    //     .then(res => res.json())
    //     .then(updatedReps => {
    //        const updatedRepData =  workouts.map(rep =>{
    //         if(rep.id !== updatedReps.id){
    //             return rep
    //         }else{
    //             return updatedReps
    //         }
    //        })
    //        setWorkouts(updatedRepData)
    //     })
    // }

    // function decrementReps(){
    //     fetch(`http://localhost:3000/workouts/${workout.id}`,{
    //         method: "PATCH",
    //         headers:{
    //             'Content-type': 'application/json',
    //             'Accept': 'application/json'
    //         },
    //         body: JSON.stringify({reps: workout.reps - 1})
    //     })
    //     .then(res => res.json())
    //     .then(updatedReps => {
    //        const updatedRepData =  workouts.map(rep =>{
    //         if(rep.id !== updatedReps.id){
    //             return rep
    //         }else{
    //             return updatedReps
    //         }
    //        })
    //        setWorkouts(updatedRepData)
    //     })
    // }

    // function incramentSets(){
    //     fetch(`http://localhost:3000/workouts/${workout.id}`,{
    //         method: "PATCH",
    //         headers:{
    //             'Content-type': 'application/json',
    //             'Accept': 'application/json'
    //         },
    //         body: JSON.stringify({sets:workout.sets+1})
    //     })
    //     .then(res => res.json())
    //     .then(updatedSets => {
    //        const updatedSetData =  workouts.map(set =>{
    //         if(set.id !== updatedSets.id){
    //             return set
    //         }else{
    //             return updatedSets
    //         }
    //        })
    //        setWorkouts(updatedSetData)
    //     })
    // }

    // function decrementSets(){
    //     fetch(`http://localhost:3000/workouts/${workout.id}`,{
    //         method: "PATCH",
    //         headers:{
    //             'Content-type': 'application/json',
    //             'Accept': 'application/json'
    //         },
    //         body: JSON.stringify({sets:workout.sets - 1})
    //     })
    //     .then(res => res.json())
    //     .then(updatedSets => {
    //        const updatedSetData =  workouts.map(set =>{
    //         if(set.id !== updatedSets.id){
    //             return set
    //         }else{
    //             return updatedSets
    //         }
    //        })
    //        setWorkouts(updatedSetData)
    //     })
    // }

    // function incramentWeight(){
    //     fetch(`http://localhost:3000/workouts/${workout.id}`,{
    //         method: "PATCH",
    //         headers:{
    //             'Content-type': 'application/json',
    //             'Accept': 'application/json'
    //         },
    //         body: JSON.stringify({weight:workout.weight+5})
    //     })
    //     .then(res => res.json())
    //     .then(updatedWeights => {
    //        const updatedWeightData =  workouts.map(weight =>{
    //         if(weight.id !== updatedWeights.id){
    //             return weight
    //         }else{
    //             return updatedWeights
    //         }
    //        })
    //        setWorkouts(updatedWeightData)
    //     })
    // }

    // function decrementWeight(){
    //     fetch(`http://localhost:3000/workouts/${workout.id}`,{
    //         method: "PATCH",
    //         headers:{
    //             'Content-type': 'application/json',
    //             'Accept': 'application/json'
    //         },
    //         body: JSON.stringify({weight:workout.weight - 5})
    //     })
    //     .then(res => res.json())
    //     .then(updatedWeights => {
    //        const updatedWeightData =  workouts.map(weight =>{
    //         if(weight.id !== updatedWeights.id){
    //             return weight
    //         }else{
    //             return updatedWeights
    //         }
    //        })
    //        setWorkouts(updatedWeightData)
    //     })
    // }

    // function handleDeleteWorkout(){
    //     fetch(`http://localhost:3000/workouts/${workout.id}`,{
    //         method: 'DELETE'
    //     })
    //     const filteredWorkouts = workouts.filter(w => w.id !== workout.id)
    //     setWorkouts(filteredWorkouts)

    // }

    
    //  const handleAddToProgram = (workout) => {
    //     setSavedWorkouts([...savedWorkouts, workout]);
    //     fetch(`http://localhost:3000/SavedWorkouts`, {
    //         method: 'POST',
    //         headers: {
    //           'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify({ 
    //             id: workout.id,
    //             exercise: workout.exercise,
    //             image: workout.image, 
    //             description: workout.description,
    //             reps: workout.reps,
    //             sets: workout.sets,
    //             weight: workout.weight
    //             }),
    //       })
    //         .then(response => response.json())
    //         .then(data => {
    //           console.log(data);
    //         })
    //         .catch(error => {
    //           console.error(error);
    //         });
    //     };
        


    return(
        <div className="style-workout">
            {/* <div className="workout-item" onClick={flipWorkout}>
                {flipped ? 
                    <img src={workout.image} alt={workout.title}/>
                    :
                    <>
                        <h3>{workout.name}</h3>
                        <h4>{workout.description}</h4>
                    </>
                }
            </div> */}
                
            {/* <div className="button-styles">
                <span>
                <button onClick={decrementReps} id="Dreps-button">-</button>{workout.reps} reps <button onClick={incramentReps} id="Ireps-button">+</button>
                </span>
                <span>
                <button onClick={decrementSets} id="Dsets-button">-</button>{workout.sets} sets <button onClick={incramentSets} id="Isets-button">+</button>
                </span>
                <span>
                <button onClick={decrementWeight} id="Dweight-button">-</button>{workout.weight} Lbs <button onClick={incramentWeight} id="Iweight-button">+</button>
                </span>
                <span>
                <button onClick ={handleDeleteWorkout} id="remove">Remove</button>  
                </span>
                <span> 
                <button onClick={() => handleAddToProgram(workout)} id="Add-To-Program">Add to program</button>
                </span>
            </div> */}
            
    </div>
    )
}

export default Workout