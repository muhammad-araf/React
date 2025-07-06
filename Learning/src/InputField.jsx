import React,{useState} from "react";
function InputField(){
    const [text,setText] = useState("Hello");
    function getValue(texty){
        setText(texty.target.value);
    }
    return(
        <div>
            <h1>{text}</h1>
            <input type="text" onChange={getValue}></input>
        </div>
    )
}
export default InputField;