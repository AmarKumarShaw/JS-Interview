import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import ProgressBar from '../public/components/ProgressBar'

function App() {
  
const [progressBars,setProgressBars] = useState([])
const addProgress= (e)=>{
  e.preventDefault()
 setProgressBars(prev=>{
  const newData = [...prev,Date.now()]
  return newData;
 })
}

  return (
    <>

  <div>
    <button onClick={addProgress}>Add</button>
  {progressBars.map(data=>{
    return(
     <div >
       <ProgressBar/>
     </div>
    )
  })}
  </div>
    </>
  )
}

export default App
