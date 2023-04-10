import React, {Component} from "react";

class Work extends Component{
    constructor(props){
        super(props);

        this.state = {
            fields: {
                inputCompany: "Company Name",
                inputPositionTitle: "Position Title",
                inputTasks: "Tasks"
            }
        }
    }

    handleChange = (e) => {
        switch(e.target.id){
            case "inputCompany":
                this.setState({
                    fields: {
                        inputCompany: e.target.value,
                        inputPositionTitle: this.state.fields.inputPositionTitle,
                        inputTasks: this.state.fields.inputTasks
                    }
                })
                break;

            case "inputPositionTitle":
                this.setState({
                    fields: {
                        inputCompany: this.state.fields.inputCompany,
                        inputPositionTitle: e.target.value,
                        inputTasks: this.state.fields.inputTasks
                    }
                })
                break;

            case "inputTasks":
                this.setState({
                    fields: {
                        inputCompany: this.state.fields.inputCompany,
                        inputPositionTitle: this.state.fields.inputPositionTitle,
                        inputTasks: e.target.value
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
                    <label htmlFor="inputCompany">Company Name</label>
                    <input
                        type="text" 
                        name="inputCompany" 
                        id="inputCompany"
                        onChange={this.handleChange}
                        value={this.state.fields.inputCompany}
                    />
                    <label htmlFor="inputPositionTitle">PositionTitle</label>
                    <input 
                        type="text" 
                        name="inputPositionTitle" 
                        id="inputPositionTitle"
                        onChange={this.handleChange}
                        value={this.state.fields.inputPositionTitle}
                    />
                    <label htmlFor="inputTasks">Tasks</label>
                    <input 
                        type="text" 
                        name="inputTasks" 
                        id="inputTasks"
                        onChange={this.handleChange}
                        value={this.state.fields.inputTasks}
                    />
                </form>
            </div>
        )
    }
}

export {Work}