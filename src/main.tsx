import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.tsx'
import Home from './components/Home.tsx'
import About from './components/About.tsx'
import Events from './components/Events.tsx'
import Instructors from './components/Instructors.tsx'
import './index.css';
// Import any other components you need (Instructors, Layout, etc.)

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />, // App will act as the root layout
    children: [
      {
        path: '', // Default route (matching '/')
        element: <Home />
      },
      {
        path: 'home', // Default route (matching '/')
        element: <Home />
      },
      {
        path: 'about', // Matches '/about'
        element: <About />
      },
      {
        path: 'events', // Matches '/events'
        element: <Events />
      },
      {
        path: 'instructors', // Matches '/events'
        element: <Instructors />
      }
      // Add more routes here as needed
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)