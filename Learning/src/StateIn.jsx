import React, {useState} from "react";
function StateIn(){
    const [name,setName] = useState("Araf");
    function changeName(){
        setName("Muhammad");
    }
    return(
        <div>
        <h1>Hi , {name}</h1>
        <button onClick={changeName}>Change Name</button>
        </div>
    )
}

export default StateIn;