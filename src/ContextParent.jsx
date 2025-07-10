import React, { useContext } from 'react'
import ContextChild from './ContextChild'
import {Mydata} from './ContextGrandParent';

const ContextParent = () => {
  const {valueData} = useContext(Mydata);
  return (
    <>

        <h1>Parent</h1>
        <h2>{valueData}</h2>
        <ContextChild/>
    </>
  )
}

export default ContextParent