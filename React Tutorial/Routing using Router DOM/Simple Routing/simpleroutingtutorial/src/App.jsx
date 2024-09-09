import React from 'react'
import { BrowserRouter as Router, Routes, Link, Route} from 'react-router-dom'
import Home from './components/Home'
import Contact from './components/Contact'
import About from './components/About'

import './App.css'

function App() {
 
  return (
    <>
    <div>

      <Router>
        <nav>
          <Link to="/">Home </Link>
          <Link to="/about">About </Link>
          <Link to="/contact">Contact </Link>
        </nav>
        <br />
        <Routes>
          <Route path='/' element = {<Home />} />
          <Route path='/about' element = {<About />} />
          <Route path='/contact' element = {<Contact />} />
        </Routes>
      </Router>
    </div>
    </>
  )
}

export default App
