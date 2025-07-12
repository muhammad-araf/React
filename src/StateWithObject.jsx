import React, { useState } from 'react'

const StateWithObject = () => {
    const[info,setInfo] = useState({
        name : "Araf",
        age : 19
    })
  return (
    <>
    <h1>State With Object in ReactJS</h1>
    <input type='text' value={info.name}
        onChange={(e) => setInfo({...info, name : e.target.value})}/>
    <input type='number' value={info.age}
        onChange={(e) => setInfo({...info, age : e.target.value})}/>
    <h3>{info.name}</h3>
    <h3>{info.age}</h3>
    </>
  )
}

export default StateWithObject