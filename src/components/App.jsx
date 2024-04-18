import { useState, useEffect } from 'react'
// import WorkoutContainer from "./WorkoutContainer"
import WorkoutForm from "./WorkoutForm"
import Navbar from "./Pages/NavBar"
import {Routes, Route, BrowserRouter as Router} from "react-router-dom"
import About from "./Pages/About"
import Contact from "./Pages/Contact"
import Services from "./Pages/Services"
import Program from "./Pages/Program"
import Home from "./Pages/Home"


function App() {

  return (
    // <Router>

    <div className='App'>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/program" element={<Program/>}/>
        <Route path="/services" element={<Services/>}/>
      </Routes>
      <div className="footer">
      <WorkoutForm />
        </div>
      </div>
    
    // </Router>

    
  )
}

export default App
