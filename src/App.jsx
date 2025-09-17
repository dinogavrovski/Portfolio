import { useState } from 'react'
import './App.css'
import VantaBackground from './components/Background'
import {BokehBackground} from './components/Bokeh'
import {SocialIcons} from './components/SocialIcons'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="relative w-screen h-screen overflow-hidden">
      <VantaBackground />
      <BokehBackground/>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
        <img src="/icons/aclogo.png" alt="Logo" className="w-16 opacity-100 mb-5" />
        <h1 className='title'>DINO.DEV</h1>
        <SocialIcons/>
        <p className="mt-5 text-lg tracking-widest animate-pulse">press any key</p>
      </div>
    </div>
  );
}

export default App
