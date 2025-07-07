function ButtonEvent(){
    function click(){
        alert("Byee bye")
    }
    return(
        <button onClick = {()=>click()}>Leave Me..!</button>
    )
}

export default ButtonEvent;