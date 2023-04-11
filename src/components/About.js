import React, {Component} from "react";

class About extends Component{
    constructor(props){
        super(props);

        this.state = {
            fields: {
                inputName: "Name",
                inputEmail: "Email",
                inputTelephone: "Telephone"
            }
        }
    }

    handleChange = (e) => {
        const {name, value} = e.target

        this.setState({
            fields: {
                ...this.state,
                [name]: value
            }
            
        });
    };

    render(){
        return(
            <div>
                <form className="form">
                    <input
                        type="text" 
                        name="inputName" 
                        id="inputName"
                        onChange={this.handleChange}
                        value={this.state.fields.inputName}
                    />
                    <input 
                        type="text" 
                        name="inputEmail" 
                        id="inputEmail"
                        onChange={this.handleChange}
                        value={this.state.fields.inputEmail}
                    />
                    <input 
                        type="text" 
                        name="inputTelephone" 
                        id="inputTelephone"
                        onChange={this.handleChange}
                        value={this.state.fields.inputTelephone}
                    />
                </form>
            </div>
        )
    }
}

export {About}