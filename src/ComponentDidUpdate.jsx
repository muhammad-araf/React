import React, { Component } from 'react'

class ComponentDidUpdate extends Component {
    constructor(){
        super()
        this.state = {
            name : 0
        }
    }
  render() {
    return (
        <>
            <h1>
                Tally Counter :
                <br></br>
            </h1>
            <h2>
                {this.state.name}
            </h2>
            <div>
            <button id="last" onClick={()=>this.setState({name : this.state.name-1})}>Previous</button>
            <button id="count" onClick={()=>this.setState({name : this.state.name+1})}>Count</button>
            <button id="reset" onClick={() =>this.setState({name : 0})}>Reset</button>
            </div>
        </>
    )
  }
}

export default ComponentDidUpdate