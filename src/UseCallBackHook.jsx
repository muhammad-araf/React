import React, { useState } from 'react'
import UseCallBackForExample from './UseCallBackForExample';

const UseCallBackHook = () => {
    const [name,setName] = useState(0);
    const [data,setData] = useState(100);
  return (
    <>
        <h1>UseCallBackHook</h1>
        <h2>{name}</h2>
        <button onClick={()=> setName(name+10)}>Update Name</button>
        <h2>{data}</h2>
        <button onClick={()=> setData(data+100)}>Update Data</button>
        <UseCallBackForExample data={data}/>
    </>
  )
}

export default UseCallBackHook