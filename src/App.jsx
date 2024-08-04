import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState('olive')

  return (
    <div className='w-full h-screen duration-200' style={{backgroundColor: color}}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
          <button 
          onClick={() => setColor('Lavender')}
          className='outline-none px-4 py-1 rounded-full shadow-lg text-black'
          style={{backgroundColor: 'Lavender'}}
          >Lavender</button>
          <button 
          onClick={() => setColor('pink')}
          className='outline-none px-4 py-1 rounded-full shadow-lg text-black'
          style={{backgroundColor: 'pink'}}
          >Pink</button>
          <button 
          onClick={() => setColor('orange')}
          className='outline-none px-4 py-1 rounded-full shadow-lg text-black'
          style={{backgroundColor: 'orange'}}
          >Orange</button>
          <button 
          onClick={() => setColor('yellow')}
          className='outline-none px-4 py-1 rounded-full shadow-lg text-black'
          style={{backgroundColor: 'yellow'}}
          >Yellow</button>
          <button 
          onClick={() => setColor('violet')}
          className='outline-none px-4 py-1 rounded-full shadow-lg text-black'
          style={{backgroundColor: 'violet'}}
          >Violet</button>
          <button 
          onClick={() => setColor('lightgreen')}
          className='outline-none px-4 py-1 rounded-full shadow-lg text-black'
          style={{backgroundColor: 'lightgreen'}}
          >LightGreen</button>
          <button 
          onClick={() => setColor('tomato')}
          className='outline-none px-4 py-1 rounded-full shadow-lg text-black'
          style={{backgroundColor: 'tomato'}}
          >Tomato</button>
          <button 
          onClick={() => setColor('skyblue')}
          className='outline-none px-4 py-1 rounded-full shadow-lg text-black'
          style={{backgroundColor: 'skyblue'}}
          >skyblue</button>
        </div>
      </div>
    </div>
  )
}

export default App

