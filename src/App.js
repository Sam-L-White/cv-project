import React, {Component} from "react";
import { About } from "./components/About";
import { Education } from "./components/Education";
import { Preview } from "./components/Preview";
import { Work } from "./components/Work"
import "./styles/App.css"

class App extends Component {
    constructor(){
        super();

        this.state = {
            fields: {
                inputName: "Name",
                inputEmail: "Email",
                inputTelephone: "Telephone",
                inputSchoolName: "School Name",
                inputTitle: "Title of Study",
                inputDate: "Date",
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
            <div className="container">
                <div className="inputContainer">
                    <About 
                        inputName={this.state.fields.inputName} 
                        inputEmail={this.state.fields.inputEmail} 
                        inputTelephone={this.state.fields.inputTelephone} 
                        handleChange={this.handleChange}
                    />
                    <Education
                        inputSchoolName={this.state.fields.inputSchoolName} 
                        inputTitle={this.state.fields.inputTitle} 
                        inputDate={this.state.fields.inputDate} 
                        handleChange={this.handleChange}
                    />
                    <Work
                        inputCompany={this.state.fields.inputCompany} 
                        inputPositionTitle={this.state.fields.inputPositionTitle} 
                        inputTasks={this.state.fields.inputTasks}
                        inputDateFrom={this.state.fields.inputDateFrom}
                        inputDateTo={this.state.fields.inputDateTo}
                        handleChange={this.handleChange}
                    />
                </div>
                <div className="previewContainer">
                    <Preview />
                </div>
            </div>
        )
    }
}
export default App;