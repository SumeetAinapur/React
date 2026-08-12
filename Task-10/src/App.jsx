import React, { useState, useRef } from "react"

function App() {
  const [number, setNumber] = useState("")
  const [currentValue, setCurrentValue] = useState("")

  const previousValue = useRef("")

  const handleUpdate = () => {
    previousValue.current = currentValue

    setCurrentValue(number)
  }

  return (
    <div>
      <h2>Number Updater</h2>
      <input type="number" 
      placeholder="Enter a number" 
      value={number} 
      onChange={(e) => setNumber(e.target.value)}/>
      <button onClick={handleUpdate}>Update</button>
      <h3>Current Value: {currentValue}</h3>
      <h3>Previous Value: {previousValue.current}</h3>
    </div>
  )
}

export default App;