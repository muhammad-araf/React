import React,{useMemo,useState} from 'react'
const Hooks = () => {
    const [name, setName] = useState(1);
    const [text,setText] = useState(100)
    const meme = useMemo(function hell(){
        console.log("Hel function called");
        return name*3;
    },[name]);
    
    
  return (
    <>
    <h2>{meme}</h2>
    <h1>{name}</h1>
    <button onClick={()=>setName(name+2)}>Update Name</button>
    <h1>{text}</h1>
    <button onClick={()=>setText(text+10)}>Update Text</button>
    </>
  )
}

export default Hooks