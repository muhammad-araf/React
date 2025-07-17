import React from 'react'
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate()
  const handleButton = () =>{
    localStorage.setItem('login',true);
    alert("Account has been logedIn!  Now u can go about")
    navigate('/about')
    
  }
  const handleLogout = () => {
    localStorage.removeItem('login');
    alert("Account has been loged out!")
  }
  return (
    <>
        <h1>Login</h1>
        <button onClick={handleButton}>Login</button>
        <button onClick={handleLogout}>Logout</button>
    </>
  )
}

export default Login