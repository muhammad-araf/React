import React, { createContext, useState } from 'react'
import ContextParent from './ContextParent';

export const Mydata = createContext();

const ContextGrandParent = () => {
    const [data,setData] = useState(0);
  return (
    <Mydata.Provider value={{valueData: data}}>
        <>
            <h1>
                GrandParent
            </h1>
            <h2>{data}</h2>
            <button onClick={() => setData(data+1)}>Update Data from GrandParent</button>
            <ContextParent/>
        </>
    </Mydata.Provider>
  )
}

export default ContextGrandParent