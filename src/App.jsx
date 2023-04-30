import React from 'react'
 import Home from './routes/Home'
 import About from './routes/About'
 import Project from './routes/Project'
 import Contact from './routes/Contact'

 import {Route, Routes} from 'react-router-dom'


function App() {

  return (
    <Routes>
       <Route path="/portfolio-website" element={<Home />}/>
       <Route path="/portfolio-website/about"  element={<About />} />
       <Route path="/portfolio-website/project" element={<Project />} />
       <Route path="/portfolio-website/contact" element={<Contact />}/>
    </Routes>
  )
}

export default App
