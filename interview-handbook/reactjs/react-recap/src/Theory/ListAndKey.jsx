import React from 'react'

const ListAndKey = () => {
    const IPL = ["CSK","MI","RCB"];
    const result = IPL.map((ipl,index)=><h1 key={ipl}>{ipl} {index}</h1>)
  return (
    <div>
        <h3>Learning - List and Key in React</h3>
        <h2>{result}</h2>
    </div>
  )
}

export default ListAndKey;

/*
i want to update my List and want add one key
List1 - ["MI","RCB","CSk"]

List2 - ["MI","RCB","CSk","RR"];


Key -  Key find identify;

Key is Unique;

*/