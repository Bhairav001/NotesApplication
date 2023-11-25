import React from 'react'

const ListInReactAndMap = () => {
    const IPL = ["CSK","MI","RCD"]
    const result = IPL.map((ipl)=><h2>{ipl}</h2>)
  return (
    <div>
        <h3>Learning - Rendering of List and</h3>
        <h1>{result}</h1>
    </div>
  )
}

export default ListInReactAndMap