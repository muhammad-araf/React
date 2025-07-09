import React, { memo } from 'react'
const UseCallBackForExample = (props) => {
        console.log("example");
  return (
    <>
        <h1>Example: {props.data+10}</h1>
    </>
  )
}

export default memo(UseCallBackForExample);