import React, {Component} from "react";

class Preview extends Component{
    constructor(props){
        super(props);

    }
    

    render(){
        return(
            <div>
                <h1>{this.props.inputName}</h1>
            </div>
        )
    }
}

export {Preview}