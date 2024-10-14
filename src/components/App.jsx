import Navbar from "./Pages/NavBar";
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Outlet /> {/* This will render child routes */}
    </div>
  );
}

export default App;
