import React, { useContext, useState } from 'react'
import { DataContext } from './DataProvider';
const Home = () => {
    const { data, setData } = useContext(DataContext);
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [Edit,setEdit] = useState(false);
    function EditData(){
        setEdit(!Edit);
    }
    function UpdateData(){
        setData({
      name: name,
      username: username,
      email: email
    });
    alert("Your Data has been Updated")
    setEdit(!Edit);
    }

  return (
    <>
    <h1>Welcome {data.name}</h1>
    <table border='1'>
        <thead>
            <tr>
                <td>Name</td>
                <td>Username</td>
                <td>Email</td>
            </tr>
        </thead>
    <thead>
        <tr>
            <td>{data.name}</td>
            <td>{data.username}</td>
            <td>{data.email}</td>
        </tr>
    
    </thead>
    
    </table>
    <button onClick={EditData}>Edit</button>
    {
        (Edit)?(
        <>
        <input type="text" placeholder="Enter Your Name" onChange={(e) => setName(e.target.value)} /><br />
        <input type="text" placeholder="Enter Your Username" onChange={(e) => setUsername(e.target.value)} /><br />
        <input type="email" placeholder="Enter Your Email" onChange={(e) => setEmail(e.target.value)} /><br /><br />
        <button onClick={UpdateData}>Update</button>
        </>
        ) : (
            <>
            </>
        )
    }
    
    </>
  )
}

export default Home