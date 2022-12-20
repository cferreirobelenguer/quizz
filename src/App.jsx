import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import '../src/assets/css/style.css'
import { Portada } from './components/Portada'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Portada/>
    </div>
  )
}

export default App
