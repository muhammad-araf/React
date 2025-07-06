import React,{useState} from "react";
function FormHandling(){
    const[name,setName] = useState(" ");
    const[option,setOption] = useState(" ");
    const[check,setCheck] = useState(" ");
    function getFormData(e){
        console.log(name,option,check);
        e.preventDefault()
    }
    return(
        <div>
            <h1>Form Handling In ReactJS</h1>
            <form onSubmit={getFormData}>
                <input type="text" placeholder="Enter Your Name" onChange={(e)=>setName(e.target.value)}></input>
                <br></br>
                <select onChange={(e)=>setOption(e.target.value)}>
                    <option>Select Any Option</option>
                    <option>Pakistan</option>
                    <option>USA</option>
                    <option>India</option>
                </select>
                <br></br>
                <input type="checkbox" onChange={(e)=>setCheck(e.target.checked)}></input>
                <br></br>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}
export default FormHandling;