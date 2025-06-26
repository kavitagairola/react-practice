import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Header'
import Furniture from './dahboard/Furniture'
import Living from './dahboard/Living'
import Slider from './dahboard/Slider'
import Hanging from './dahboard/Hanging'
import Footer from './Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Furniture/>
      <Living/>
      <Slider/>
      <Hanging/>
      <Footer/>
    </>
  )
}

export default App
