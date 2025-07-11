import React, { useRef } from 'react'
const Ref = () => {
    let myRef = useRef();
    function modifyInp(){
        console.log(myRef)
    }
  return (
    <>
        <h1>Ref</h1>
        <input type='text' ref = {myRef}/>
        <button onClick={() => modifyInp()}>Click</button>
    </>
  )
}

export default Ref