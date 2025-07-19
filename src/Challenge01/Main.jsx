import React from 'react'
import Register from './Register'
import { useNavigate } from 'react-router-dom'
const Main = () => {
    const navigate = useNavigate()
  return (
    <>
    <h1>Hi, Its My home Page</h1>
    <button onClick={()=>{navigate('/signin')}}>Signin</button><br/>
    <button onClick={()=>{navigate('/register')}}>Register</button>
    </>
  )
}

export default Main