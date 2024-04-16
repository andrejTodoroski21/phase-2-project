import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App'
//import components here
import './index.css'
import { BrowserRouter, createBrowserRouter, RouterProvider } from 'react-router-dom'

// const routes = [
//   {
//     path:"/",
//     element: //this is where you put your components <app/>,
//     children:[
//       index: true,
//       element://<home/>
//       {
//         path:"/home",
//         element: //this is where you put your components
//       },
//       {
//         path:"/home",
//         element: //this is where you put your components,
//         children:[{
//           path: //child path
//           element: //child element if you want to see the children go into the file and import outlet from react router dom then you add <outlet/> element in the return 
//         }]
//       }
//     ]
//   },

// ]

// const router = createBrowserRouter(routes)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    {/* </RouterProvider> */}
  </React.StrictMode>,
)
