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
        switch(e.target.id){
            case "inputName":
                this.setState({
                    fields: {
                        inputName: e.target.value,
                        inputEmail: this.state.fields.inputEmail,
                        inputTelephone: this.state.fields.inputTelephone
                    }
                })
                break;

            case "inputEmail":
                this.setState({
                    fields: {
                        inputName: this.state.fields.inputName,
                        inputEmail: e.target.value,
                        inputTelephone: this.state.fields.inputTelephone
                    }
                })
                break;

            case "inputTelephone":
                this.setState({
                    fields: {
                        inputName: this.state.fields.inputName,
                        inputEmail: this.state.fields.inputEmail,
                        inputTelephone: e.target.value
                    }
                })
                break;

            default:
        }
    }

    render(){
        return(
            <div>
                <form>
                    <label htmlFor="inputName">Name</label>
                    <input
                        type="text" 
                        name="inputName" 
                        id="inputName"
                        onChange={this.handleChange}
                        value={this.state.fields.inputName}
                    />
                    <label htmlFor="inputEmail">Email</label>
                    <input 
                        type="text" 
                        name="inputEmail" 
                        id="inputEmail"
                        onChange={this.handleChange}
                        value={this.state.fields.inputEmail}
                    />
                    <label htmlFor="inputTelephone">Telephone</label>
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