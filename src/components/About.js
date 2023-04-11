import React, {Component} from "react";

class About extends Component{
    constructor(props){
        super(props);

    }

    render(){
        return(
            <div>
                <form className="form">
                    <input
                        type="text" 
                        name="inputName" 
                        id="inputName"
                        onChange={this.props.handleChange}
                        value={this.props.inputName}
                    />
                    <input 
                        type="text" 
                        name="inputEmail" 
                        id="inputEmail"
                        onChange={this.props.handleChange}
                        value={this.props.inputEmail}
                    />
                    <input 
                        type="text" 
                        name="inputTelephone" 
                        id="inputTelephone"
                        onChange={this.props.handleChange}
                        value={this.props.inputTelephone}
                    />
                </form>
            </div>
        )
    }
}

export {About}