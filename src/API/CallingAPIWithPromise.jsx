import React, { useEffect, useState } from 'react'

const CallingAPIWithPromise = () => {
  const [data,setData] = useState([]);
  useEffect(()=>{fetch("https://mocki.io/v1/fdc8a28e-a83d-4047-814b-36320ff1db2a")
    .then((res)=>{
    res.json()
    .then((response)=>{
      setData(response)
      // api = response;
      // console.log(data);
      
    })
  })
},[])
  
  
  return (
    <>
    <h1>Calling API with Promise</h1>
    <table border='1'>
      <thead>
          <tr>
            <td>Id</td>
            <td>Name</td>
            <td>Email</td>
            <td>Contact</td>
          </tr>
      </thead>
      <tbody>
          {
            data.map((item)=>(
              <tr>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.contact}</td>
              </tr>
            ))
          }
      </tbody>
    </table>
    </>
  )
}

export default CallingAPIWithPromise