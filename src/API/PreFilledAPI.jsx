import React, { useEffect, useState } from 'react'

const PreFilledAPI = () => {
    const [FormData,setFormData] = useState({
        name : "",
        age : "",
        email : "",
        contact : ""
    })
    const [data,setData] = useState([]);
  function CallApi(){
    fetch("http://localhost:3000/MyApi")
      .then((res)=>{
      res.json()
      .then((response)=>{
        setData(response)
        
      })
    })
  }
      useEffect(()=>{
        CallApi()
  },[])
    function update(userId){
        // console.log(data[userId-1])
        const item = data[userId-1];
        setFormData({
            name : item.name,
            age : item.age,
            email : item.email,
            contact : item.contact
        })
    }
return (
    <>
    
    <h1>Calling API with Promise</h1>
        <table border='1'>
      <thead>
          <tr>
            <td>Id</td>
            <td>Name</td>
            <td>Age</td>
            <td>Email</td>
            <td>Contact</td>
            <td>Update Data</td>
          </tr>
      </thead>
      <tbody>
          {
            data.map((item,i)=>(
              <tr key={i}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.age}</td>
              <td>{item.email}</td>
              <td>{item.contact}</td>
              <td><button onClick={()=>update(item.id)}>Edit</button></td>
              </tr>
            ))
          }
      </tbody>
    </table>
          <br></br>
    <input type='text' value={FormData.name}/><br></br>
    <input type='text' value={FormData.age} /><br></br>
    <input type='text' value={FormData.email} /><br></br>
    <input type='text' value={FormData.contact} /><br></br>
    <button>Update</button>
    </>
)
}

export default PreFilledAPI