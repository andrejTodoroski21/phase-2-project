import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
//import components here
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const routes = [
  {
    path:"/home",
    element: //this is where you put your components
  },
  {
    path:"/home",
    element: //this is where you put your components
  },
  {
    path:"/home",
    element: //this is where you put your components
  }
]

const router = createBrowserRouter(routes)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </React.StrictMode>,
)
