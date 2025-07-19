import React, { useContext, useState } from 'react';
import { DataContext } from './DataProvider';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const navigate = useNavigate()
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { data, setData } = useContext(DataContext);

  const ConfigData = () => {
    setData({
      name: name,
      username: username,
      email: email,
      password: password
    });
    alert("Your Data has been saved")
    navigate('/signin');

  };

  return (
    <>
      <h2>Register Here</h2>
      <input type="text" placeholder="Enter Your Name" onChange={(e) => setName(e.target.value)} /><br />
      <input type="text" placeholder="Enter Your Username" onChange={(e) => setUsername(e.target.value)} /><br />
      <input type="text" placeholder="Enter Your Email" onChange={(e) => setEmail(e.target.value)} /><br />
      <input type="password" placeholder="Enter Your Password" onChange={(e) => setPassword(e.target.value)} /><br /><br />
      <button onClick={ConfigData}>Register</button>
    </>
  );
};

export default Register;
