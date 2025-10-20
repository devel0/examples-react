import { useState } from 'react'
import { Pitfall1 } from './Pitfall1/Pitfall1'
import { Pitfall2 } from './Pitfall2/Pitfall2'

function App() {
  const [pitfall, setPitfall] = useState(1)

  return <div style={{ width: '600px' }}>
    <div style={{ display: 'flex', gap: '1rem' }}>
      <button onClick={() => setPitfall(1)}>pitfall1</button>
      <button onClick={() => setPitfall(2)}>pitfall2</button>
    </div>
    <hr />

    {pitfall === 1 && <Pitfall1 />}
    {pitfall === 2 && <Pitfall2 />}
  </div>
}

export default App
