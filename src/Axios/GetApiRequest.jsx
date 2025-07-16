import axios from 'axios'
import React, { useEffect, useState } from 'react'

const GetApiRequest = () => {
  const [data,setData] = useState([])
  useEffect(()=>{
    axios.get("http://localhost:3000/MyApi").then((res)=>{
      setData(res.data);
    })
  },[])
  return (
    <>
        <h1>Get API</h1>
        {
          data.map((item)=>{
            return(
              <h5>{item.name}</h5>
            )
          })
        }

    </>
  )
}

export default GetApiRequest