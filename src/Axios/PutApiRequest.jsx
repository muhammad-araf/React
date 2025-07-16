import axios, { formToJSON } from 'axios'
import React, { useEffect, useState } from 'react'

const PutApiRequest = () => {
    const[data,setData] = useState([]);
    const [formData, setformData] = useState({
            name : "",
            age : "",
            email : "",
            contact : ""
        })
    useEffect(()=>{
        axios.get("http://localhost:3000/MyApi/1").then((res)=>{
            setData(res.data);
        })
    },[])
    function GetValue(e){
        setformData({...formData,[e.target.name] : e.target.value});
    }
    function PutApi(e){
        e.preventDefault();
        axios.put("http://localhost:3000/MyApi/1",{formData}).then((res)=>{
            console.log(res)
        })
    }
  return (
    <>
    <table border='1'>
        <thead>
            <tr>
                <td>Name</td>
                <td>Age</td>
                <td>Email</td>
                <td>Contact</td>
            </tr>
            <tr>
                <td>{data.name}</td>
                <td>{data.age}</td>
                <td>{data.email}</td>
                <td>{data.contact}</td>
            </tr>
        </thead>
    </table>
    <form onSubmit={PutApi}>
            <input type="text" name='name' placeholder='Enter Name' onChange={(e)=>GetValue(e)}/><br></br>
            <input type="number" name='age' placeholder='Enter Number' onChange={(e)=>GetValue(e)}/><br></br>
            <input type="email" name='email' placeholder='Enter Email' onChange={(e)=>GetValue(e)}/><br></br>
            <input type="text" name='contact' placeholder='Enter your Socials' onChange={(e)=>GetValue(e)}/><br></br>
            <button onClick={PutApi}>Submit</button>
        </form>
    </>
  )
}

export default PutApiRequest