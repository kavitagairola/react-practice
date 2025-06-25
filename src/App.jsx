import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Header'
import Furniture from './dahboard/Furniture'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Furniture/>
    </>
  )
}

export default App
