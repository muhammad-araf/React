import React, { useEffect, useState } from 'react'

const PutAPI = () => {
    const [FormData,setFormData] = useState({
        id : "",
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
            id : item.id,
            name : item.name,
            age : item.age,
            email : item.email,
            contact : item.contact
        })
    }
    function updateApi(){
        const id = FormData.id;
        fetch(`http://localhost:3000/MyApi/${id}`,{
            method : 'PUT',
            headers : {
                'Accept' : 'application/JSON',
                'Content-Type' : 'application/JSON'
            },
            body : JSON.stringify(FormData)
        }).then((res)=>{
        })
        CallApi();
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
    <input type='text' value={FormData.name} onChange={(e)=>setFormData({...FormData,name:e.target.value})}/><br></br>
    <input type='text' value={FormData.age} onChange={(e)=>setFormData({...FormData,age:e.target.value})}/><br></br>
    <input type='text' value={FormData.email} onChange={(e)=>setFormData({...FormData,email:e.target.value})}/><br></br>
    <input type='text' value={FormData.contact} onChange={(e)=>setFormData({...FormData,contact:e.target.value})}/><br></br>
    <button onClick={()=>updateApi()}>Update</button>
    </>
)
}

export default PutAPI