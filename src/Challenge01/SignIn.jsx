import React, { useContext, useState } from 'react'
import { DataContext } from './DataProvider';
import { useNavigate } from 'react-router-dom';

const SignIn = () => {
    const navigate = useNavigate()
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');
    const { data, setData } = useContext(DataContext);
    const UserRight = () => {
      if (username==data.username && password == data.password){
        alert("Login Successfully");
        navigate('/main')
      }else{
      alert("Wrong Credentials")
      console.log(data)
      }
    }
  return (
    <>
    <h2>Sign In</h2>
    <input type='text' name='username' placeholder='Enter Your Username' onChange={(e)=>setUsername(e.target.value)}/><br/>
    <input type='password' name='password' placeholder='Enter Your password' onChange={(e)=>setPassword(e.target.value)}/><br/><br/>
    <button onClick={UserRight}>Sign In</button>
    </>
  )
}

export default SignIn