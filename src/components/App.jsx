import Navbar from "./Pages/NavBar"
import {Routes, Route, BrowserRouter as Router} from "react-router-dom"
import About from "./Pages/About"
import Contact from "./Pages/Contact"
import Services from "./Pages/Services"
import Program from "./Pages/Program"
import Home from "./Pages/Home"
import CreateProgram from "./CreateProgram"
import Login from "./UserPanel/Login"
import Signup from "./UserPanel/Signup"
import { useState, useEffect } from "react"
import { Outlet } from 'react-router-dom'
import UserDetails from "./UserPanel/UserDetails"



function App() {

  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    fetch('/api/get-session')
    .then(response => {
      if (response.status === 200) {
        response.json()
        .then(loggedInUser => setCurrentUser(loggedInUser))
      }
    })
  }, []);

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
        <Route path="/programs" element={<CreateProgram/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="logout" element={<UserDetails/>}/>

      </Routes>
      <div>
        <Outlet context={{currentUser, setCurrentUser}}/>
      </div>
      </div>
    
    // </Router>

    
  )
}

export default App
