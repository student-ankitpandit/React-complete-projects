import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>react ongoing</h1>
      <h2>counter value: 5</h2>
      <button>Add Value</button>
      <br />
      <button>Remove Value</button>
    </>
  )
}

export default App
