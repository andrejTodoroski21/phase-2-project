import { useState } from 'react';

function WorkoutForm({ setWorkouts }) {
    const [formData, setFormData] = useState({
        exercise: "",
        image: "",
        description: "",
    });

    function handleSubmit(event) {
        event.preventDefault();
        fetch(`http://localhost:3000/workouts`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(formData)
        })
        .then(response => response.json())
        .then(newWorkoutObj => {
            setFormData({ exercise: "", image: "", description: "" });
            setWorkouts(workouts => [...workouts, newWorkoutObj]);
        });
    }

    

    return (
        <form onSubmit={handleSubmit} className="workout-form">
            <h2>Add A New Workout</h2>
            <label htmlFor="exercise">Exercise: </label>
            <input
                onChange={(event) => setFormData({ ...formData, exercise: event.target.value })}
                value={formData.exercise}
                name="exercise" /> {/* corrected name attribute */}

            <label htmlFor="image">Image URL: </label>
            <input
                onChange={(event) => setFormData({ ...formData, image: event.target.value })}
                value={formData.image}
                name="image" /> {/* corrected name attribute */}

            <label htmlFor="description">Description: </label>
            <input
                onChange={(event) => setFormData({ ...formData, description: event.target.value })}
                value={formData.description}
                name="description" /> {/* corrected name attribute */}

            <button type="submit" id='submit-workout'>Add Workout</button> {/* corrected input type */}
        </form>
    );
}

export default WorkoutForm;