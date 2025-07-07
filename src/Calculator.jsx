import React, { Component } from 'react'

class ComponentDidUpdate extends Component {
    constructor(){
        super()
        this.state = {
            name : 0
        }
    }
  render() {
    return(
        
        <>
        
            <h1>
                Tally Counter :
                <br></br>
            </h1>
            <div>
            <h2>{this.state.name}</h2>
            <button
                id="last"
                onClick={()=>{
                    if(this.state.name>0){
                        this.setState({name : this.state.name-1});
                    }else{
                        this.setState({name : 0});
                    }
                }}>-</button>
            <button id="reset" onClick={() =>this.setState({name : 0})}>0</button>
            <button id="count" onClick={()=>this.setState({name : this.state.name+1})}>+</button>
            </div>
        </>
    )
}
}

export default ComponentDidUpdate;