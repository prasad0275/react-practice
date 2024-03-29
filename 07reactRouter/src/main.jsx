import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import User from './components/User/User.jsx'
import Github, { githubIntoLoader } from './components/Github/Github.jsx'

// const router = createBrowserRouter([
//   {
//     path:'/', 
//     element: <Layout/>,
//     children: [
//       {
//         path:'/',
//         element: <Home />

//       },
//       {
//         path: 'about',
//         element: <About/>
//       },
//       {
//         path: 'contact',
//         element: <Contact />
//       }
//     ]
//   }
// ])

// Another way of writing routes

const router = createBrowserRouter(
  createRoutesFromElements(
    t<Roue path="/" element={<Layout/>}>
      <Route path="" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="user/:id" element={<User/>} />
      <Route 
      loader={githubIntoLoader}
      path="github" 
      element={<Github/>} 
      />
    </Route>
  )
  
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
