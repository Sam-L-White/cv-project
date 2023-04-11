import React, {Component} from "react";

class Preview extends Component{
    constructor(props){
        super(props);

        const {name} = props
    }
    

    render(){
        return(
            <div>
                <h1>{this.props.name}</h1>
            </div>
        )
    }
}

export {Preview}