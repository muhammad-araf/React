import React from 'react'

const PostAPI = () => {
    const URL = "https://dummy.restapiexample.com/api/v1/create";
    const OBJ = {
        "name" : "Araf",
        "salary" : 30000,
        "age" : 17
    }
    fetch(URL,{
        method : "POST",
        headers: {
            'Accept': 'application/JSON',
            'Content-Type': 'application/JSON'
        },
        body: JSON.stingify(OBJ)
    }).then((res)=>{
        console.log(res);
    })
  return (
    <>
        <h1>Post API</h1>
    </>
  )
}

export default PostAPI