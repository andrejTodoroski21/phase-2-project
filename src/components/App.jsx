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
import { useState } from "react"
import { Outlet } from 'react-router-dom'



function App() {

  const [currentUser, setCurrentUser] = useState(null);
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

      </Routes>
      <div>
        <Outlet context={{currentUser, setCurrentUser}}/>
      </div>
      </div>
    
    // </Router>

    
  )
}

export default App
