import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './components/App';
import { UserProvider } from './components/UserContext';// Import the UserProvider
import Home from './components/Pages/Home';
import About from './components/Pages/About';
import Contact from './components/Pages/Contact';
import Services from './components/Pages/Services';
import Program from './components/Pages/Program';
import CreateProgram from './components/CreateProgram';
import Login from './components/UserPanel/Login';
import Signup from './components/UserPanel/Signup';
import UserDetails from './components/UserPanel/UserDetails';
import "../src/index.css"

// Define your routes
const routes = [
  {
    path: '/',
    element: <App />,
    children: [
      { path: '', element: <Home /> },
      { path: 'about', element: <About /> },
      { path: 'contact', element: <Contact /> },
      { path: 'program', element: <Program /> },
      { path: 'services', element: <Services /> },
      { path: 'programs', element: <CreateProgram /> },
      { path: 'login', element: <Login /> },
      { path: 'signup', element: <Signup /> },
      { path: 'logout', element: <UserDetails /> },
    ],
  },
];

// Create the router
const router = createBrowserRouter(routes);

// Render the app
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserProvider> {/* Wrap UserProvider here */}
      <RouterProvider router={router} />
    </UserProvider>
  </React.StrictMode>,
);
