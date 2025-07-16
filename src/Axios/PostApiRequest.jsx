import axios from 'axios';
import React, { useState } from 'react'

const PostApiRequest = () => {
    const [formData, setformData] = useState({
        name : "",
        age : "",
        email : "",
        contact : ""
    })
    const GetUpdate = (e) => {
        e.preventDefault();
        setformData({...formData,[e.target.name] : e.target.value});
        // console.log(formData.name)
    }
    const PostApi = (e) =>{
        e.preventDefault();
        axios.put("http://localhost:3000/MyApi/1",formData).then((res)=>{
            console.log(res)
        })
    }
  return (
    <>
        <form onSubmit={PostApi}>
            <input type="text" name='name' placeholder='Enter Name' onChange={(e)=>GetUpdate(e)}/><br></br>
            <input type="number" name='age' placeholder='Enter Number' onChange={(e)=>GetUpdate(e)}/><br></br>
            <input type="email" name='email' placeholder='Enter Email' onChange={(e)=>GetUpdate(e)}/><br></br>
            <input type="text" name='conatact' placeholder='Enter your Socials' onChange={(e)=>GetUpdate(e)}/><br></br>
            <button onClick={PostApi}>Submit</button>
        </form>
    </>
  )
}

export default PostApiRequest