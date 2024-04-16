import { useState, useEffect } from 'react'
import WorkoutContainer from "./WorkoutContainer"
import WorkoutForm from "./WorkoutForm"
import Navbar from "./NavBar"
import {Routes, Route} from "react-router-dom"
import About from "../Pages/About"
import Contact from "../Pages/Contact"
import Services from "../Pages/Services"
import Program from "../Pages/Program"
import Home from "../Pages/Home"


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
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/program" element={<Program/>}/>
        <Route path="/services" element={<Services/>}/>
      </Routes>

      <main>
        <div className='flex-container'>
          <WorkoutContainer workouts={workouts} setWorkouts={setWorkouts}/>
        </div>
      </main>
      <div className='footer'>
      <WorkoutForm setWorkouts={setWorkouts}/>
      </div>
      </div>

    
  )
}

export default App
