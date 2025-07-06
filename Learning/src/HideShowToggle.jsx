import React,{useState} from "react";
function HideShowToggle(){
    const [check,setCheck] = useState(true)
    return(
        <div>
            <h1>Hide Show Toggle in React:</h1>
            {
                check ?
                <h3>Hi Please Hide Me...</h3>
                :
                null
            }
            <button onClick={()=>setCheck(false)}>Hide</button>
            <button onClick={()=>setCheck(true)}>Show</button>
        </div>
    )
}
export default HideShowToggle;