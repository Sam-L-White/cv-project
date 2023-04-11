import React, {Component} from "react";

class Work extends Component{
    constructor(props){
        super(props);

        this.state = {
            fields: {
                inputCompany: "Company Name",
                inputPositionTitle: "Position Title",
                inputTasks: "Tasks",
                inputDateFrom: new Date().toISOString().split('T')[0],
                inputDateTo: new Date().toISOString().split('T')[0]
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
                    <input
                        type="text" 
                        name="inputCompany" 
                        id="inputCompany"
                        onChange={this.handleChange}
                        value={this.state.fields.inputCompany}
                    />
                    <input 
                        type="text" 
                        name="inputPositionTitle" 
                        id="inputPositionTitle"
                        onChange={this.handleChange}
                        value={this.state.fields.inputPositionTitle}
                    />
                    <input 
                        type="text" 
                        name="inputTasks" 
                        id="inputTasks"
                        onChange={this.handleChange}
                        value={this.state.fields.inputTasks}
                    />
                    <input 
                        type="date" 
                        name="inputDateFrom" 
                        id="inputDateFrom"
                        onChange={this.handleChange}
                        value={this.state.fields.inputDateFrom}
                    />
                    <input 
                        type="date" 
                        name="inputDateTo" 
                        id="inputDateTo"
                        onChange={this.handleChange}
                        value={this.state.fields.inputDateTo}
                    />
                </form>
            </div>
        )
    }
}

export {Work}