import { useState } from 'react'
import './App.css'
import Header from './components/Header/header'
import Footer from './components/Footer/footer'
import Main from './components/Main/main'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <Header />
      <Main />
      <Footer />


    </>
  )
}

export default App
