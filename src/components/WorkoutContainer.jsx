import Workout from "./Workout"

function WorkoutContainer({workouts, setWorkouts}){

    const mappedWorkouts = workouts.map(workout => <Workout key={workout.id} workout = {workout} workouts = {workouts}
        setWorkouts = {setWorkouts} />)

    return (
        <div className="workout-container">
            {mappedWorkouts}
            
        </div>
    )
}



export default WorkoutContainer