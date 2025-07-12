import React, { useEffect, useRef } from 'react'
const PrevPropChild = (prop) => {
    let ref = useRef();
    useEffect(()=>{
        ref.current = prop.data;
    })
    const prevProp = ref.current
  return (
    <>
    <h1>{prop.data}</h1>
    <h2>{prevProp}</h2>
    </>
  )
}
export default PrevPropChild