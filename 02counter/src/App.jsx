import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 let [counter, setCounter] = useState(15)
 const addValue = () => {
  if(counter === 20){
    alert("Cannot increase value more than 20")
  }
  else{
    setCounter(counter+1)
  }
  
 }

 const removeValue = () => {
  if(counter === 0){
    alert("Cannot decrease value less than 0")
  }
  else{
    setCounter(counter-1)
  }
  
 }
  return (
    <>
      <h1>Counter Application</h1>
      <h2>Counter value : {counter}</h2>
      <button onClick={addValue}>Add value</button>
      <button onClick={removeValue}>Remove value</button>
    </>
  )
}

export default App
