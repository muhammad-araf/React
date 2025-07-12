import React, { useState } from 'react'
import PrevPropChild from './PrevPropChild';

const PrevProp = () => {
    const[count, setCount] = useState(0);
    function Update(){
        setCount(Math.floor((Math.random()*10)+1))
    }
  return (
    <>
    {/* <h1>Count: {count}</h1> */}
    <PrevPropChild data={count} set={setCount}/>
    <button onClick={Update}>Update</button>
    </>
  )
}

export default PrevProp