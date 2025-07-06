import React, {useState} from "react";
function InputFieldWithButton(){
    const [text,setText] = useState(" ");
    const [check,setCheck] = useState(false);
    function ChangeVal(val){
        setText(val.target.value);
        setCheck(false);
    }
    return(
        <div>
            {
                check ?
                <h1>{text}</h1>
                :
                null
            }
            
            <input type="text" onChange={ChangeVal}></input>
            <button onClick={()=>setCheck(true)}>Display Msg</button>
        </div>
    )
}
export default InputFieldWithButton;