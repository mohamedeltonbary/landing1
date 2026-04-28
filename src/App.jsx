import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import Features from './components/Contact/Features'
import Pricing from './components/Pricing/Pricing'


function App() {
  const [count, setCount] = useState(0)
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <>
    {/* <p>mo eid</p> */}
    {/* <Navbar/> */}
      

      <div className="min-h-screen bg-[#020617]">
      <Navbar openForm={() => setIsFormOpen(true)}/>
      {/* هنا هنحط الـ Hero Section الخطوة الجاية */}
      <Home isFormOpen={isFormOpen} setIsFormOpen={setIsFormOpen}/>
      <Features/>
      <Pricing/>
    </div>
    </>
  )
}

export default App
