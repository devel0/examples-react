import { useState } from 'react'
import './App.css'
import { Pitfall1 } from './Pitfall1'

function App() {
  const [pitfall, setPitfall] = useState(1)

  if (pitfall === 1) return <Pitfall1 />

  return null
}

export default App
