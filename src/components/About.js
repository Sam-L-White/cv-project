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