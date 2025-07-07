import React from 'react'
function PassFunctionAsProp(p) {
  return (
    <div>
        <h1>Pass Function As Props :</h1>
        <button onClick={()=>p.data()}>Send Data</button>
    </div>
  )
}

export default PassFunctionAsProp