import './App.css'
import { SvgFromUrl } from './SvgFromUrl'

function App() {
  const svgUrl = "http://localhost:5173/home.svg"

  return <div className='mainDiv'>
    <SvgFromUrl
      url={svgUrl}
      width='100px'
      height='100px'
      fill='red'
    />

    <SvgFromUrl
      url={svgUrl}
      width='100px'
      height='100px'
      fill='cyan'
    />
  </div>
}

export default App
