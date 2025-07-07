import React,{useState} from "react";
function ConditionalRendering(){
    let [age,setAge] = useState(null);
    let [check,setCheck] = useState(false);
    return(
        <div>
            <h1>
                Condition Rendering In ReactJS
            </h1>
            <input type="number" OnChange={(e)=>setAge(e.target.value)}></input>
            <button onClick={()=>setCheck(!check)}>Send</button>
            {
                check?
                age=0? <h3>Your are not a Human</h3> :age<18? <h3>Your Age is less than 18</h3> :  <h3>Your Age is greater than 18</h3>
                :
                null
            }
        </div>
    )
}
export default ConditionalRendering;