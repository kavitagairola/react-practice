import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Header'
import Furniture from './dahboard/Furniture'
import Living from './dahboard/Living'
import Tabs from './dahboard/Tabs'
import Hanging from './dahboard/Hanging'
import Footer from './Footer'
import Cetagery from './cetagery/Cetagery'
// import Footertwo from './Footer2'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Furniture/>
      <Living/>
     <Tabs/>
      <Hanging/>
      <Footer/>
    <Cetagery/>
      {/* <Footertwo/> */}
    </>
  )
}

export default App
