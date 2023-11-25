import React, { useRef, useState } from 'react'

const StopWatch = () => {
    const [timer, setTimer] = useState(0)
    const running = useRef(null)
    // console.log(running.current)

    const handleStart =()=>{
        running.current=setInterval(()=>{
            setTimer((time)=>time+1)
        },1000)
    }

    const handleStop =()=>{
        clearInterval(running.current)
    }

    const handleReset=()=>{
        clearInterval(running.current)
        setTimer(0)
    }

  return (
    <div>
        <h3>Stop-Watch</h3>
        <h1>Timer:{timer}</h1>
        <button onClick={handleStart}>Start</button><br />
        <button onClick={handleStop}>Stop</button>
        <br />
        <button onClick={handleReset}>Reset</button>
    </div>
  )
}

export default StopWatch