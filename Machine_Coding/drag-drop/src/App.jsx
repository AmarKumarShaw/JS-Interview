import { useState } from 'react'
import './App.css'
import DragDrop from './components/DragDrop'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <DragDrop/>
    
    </div>
  )
}

export default App
