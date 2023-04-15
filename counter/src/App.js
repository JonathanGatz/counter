
import React, { useState } from "react";
import "./App.css";       // Importing app.css is css file to add styling
  
const App = () => {

  const [counter, setCounter] = useState(0)     //  Counter is a state initialized to 0
  
  const handleClick1 = () => {       // Function is called everytime increment button is clicked
    setCounter(counter + 1)         // Counter state is incremented
  }
  
  const handleClick2 = () => {      // Function is called everytime decrement button is clicked
    setCounter(counter - 1)        // Counter state is decremented
  }
  
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '300%',
      position: 'absolute',
      width: '100%',
      height: '100%',
      top: '-15%',
    }}>
      Counter App
      <div style={{
        fontSize: '120%',
        position: 'relative',
        top: '10vh',
      }}>
        {counter}
      </div>
      <div className="buttons">
        <button style={{
          fontSize: '60%',
          position: 'relative',
          top: '20vh',
          marginRight: '5px',
          backgroundColor: 'green',
          borderRadius: '8%',
          color: 'white',
        }}
          onClick={handleClick1}>Increment</button>
        <button style={{
          fontSize: '60%',
          position: 'relative',
          top: '20vh',
          marginLeft: '5px',
          backgroundColor: 'red',
          borderRadius: '8%',
          color: 'white',
        }}
          onClick={handleClick2}>Decrement</button>
      </div>
    </div>
  )
}
  
export default App