import React,{useState,useEffect} from 'react'

const DeleteAPI = () => {
  const [data,setData] = useState([]);
  function CallApi(){
    fetch("http://localhost:3000/MyApi")
      .then((res)=>{
      res.json()
      .then((response)=>{
        setData(response)
        // api = response;
        // console.log(data);
        
      })
    })
  }
      useEffect(()=>{
        CallApi()
  },[])
  const change = (userId) =>{
    fetch(`http://localhost:3000/MyApi/${userId}`,{
        method : 'DELETE'
      }).then((res)=>{
        console.log(res)
        CallApi();
  })
}
  
  return (
    <>
        <h1>DeleteAPI</h1>
        <table border='1'>
      <thead>
          <tr>
            <td>Id</td>
            <td>Name</td>
            <td>Age</td>
            <td>Email</td>
            <td>Contact</td>
            <td>Delete</td>
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
              <td><button onClick={()=>change(item.id)}>Delete</button></td>
              </tr>
            ))
          }
      </tbody>
    </table>
    </>
  )
}

export default DeleteAPI