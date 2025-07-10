import React, { useContext } from 'react'
import {Mydata} from './ContextGrandParent';
const ContextChild = () => {
  const {valueData} = useContext(Mydata);
  return (
    <>
    <h1>Class</h1>
    <h2>{valueData}</h2>
    </>
  )
}

export default ContextChild