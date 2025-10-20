import './App.css'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home'
import { Page1 } from './pages/Page1'
import { Page2 } from './pages/Page2'
import { TrackRender } from './components/TrackRender'
import { Working } from './components/Working'

function App() {

  return <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
    <BrowserRouter>

      <div style={{ justifyContent: 'center', display: 'flex', gap: '1rem' }}>
        <Link to="/">Home</Link>
        <Link to="/page1">Page1</Link>
        <Link to="/page2">Page2</Link>
      </div>

      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/page1" element={<Page1 />} />
          <Route path="/page2" element={<Page2 />} />
        </Routes>
      </div>

      <Working />

      <TrackRender />
    </BrowserRouter>
  </div>
}

export default App
