import React, { useRef, useState } from 'react'

const StopWatch = () => {
    const [timer, setTimer]= useState(0);

    const timingStart = useRef(null)
    function handleStart(){
       timingStart.current=setInterval(()=>{
           setTimer((time)=>time+1)
       },1000)
    }

    const handleStop=()=>{
        clearInterval(timingStart.current)
    }

    function hnadleReset(){
          clearInterval(timingStart.current)
          setTimer(0)
    }
  return (
    <div>
        <h3>Learinig StopWatch</h3>
        <h1>Timer: {timer}</h1>
        <button onClick={handleStart}>Start</button>
        <button onClick={handleStop}>Stop</button>
        <button onClick={hnadleReset}>Reset</button>
    </div>
  )
}

export default StopWatch