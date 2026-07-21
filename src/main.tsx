import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.tsx'
import Home from './components/Home.tsx'
import About from './components/About.tsx'
import Events from './components/Events.tsx'
import Instructors from './components/Instructors.tsx'
import Contact from './components/Contact.tsx'
import Gallery from './components/Gallery.tsx'
import './index.css';
import Program from './components/Program.tsx'
import PhotoGallery from './components/GalleryAlbum.tsx'

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
      },
      {
        path: 'contact', // Matches '/events'
        element: <Contact />
      },
      {
        path: 'gallery', // Matches '/events'
        element: <Gallery />
      },
      {
        path: 'galleryalbum', // Matches '/photo-gallery'
        element: <PhotoGallery />
      },
      {
        path: 'program', // Matches '/events'
        element: <Program />
      },
      {
        path: 'index.html',
        // The 'replace' prop ensures /index.html is wiped from browser history
        element: <Home />
      }
      // Add more routes here as needed
    ]
  }
], {
  basename: "" // 👈 Add this line right here
})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)