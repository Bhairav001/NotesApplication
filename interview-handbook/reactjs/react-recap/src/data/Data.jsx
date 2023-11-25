import React, { useRef, useState } from 'react'

const Data = () => {
   const [timer, setTimer] = useState(0);

   const running= useRef(null);
   const handleStart=()=>{
      running.current= setInterval(()=>{
          setTimer((time)=>time+1)
      },1000)
   }
   const handlePause=()=>{
      clearInterval(running.current)
   }
   const handleReset=()=>{
      clearInterval(running.current)
      setTimer(0)
   }
  return (
    <div>
      <h2>Stop-Watch Application</h2>
      <h1>Timer: {timer}</h1>
      <button onClick={handleStart}>Start</button><br />
      <button onClick={handlePause}>Pause</button><br />
      <button onClick={handleReset}>Reset</button>
    </div>
  )
}

export default Data

