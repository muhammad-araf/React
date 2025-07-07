// import { useState } from "react";
import React, {useState} from "react";

function CounterApp(){
    const [i,updatei] = useState(0);
    function Update(){
        updatei(i+1);
    }
    return(
        <div>
        <h1>{i}</h1>
        <button onClick={Update}>Count++</button>
        </div>
    )
}
export default CounterApp;