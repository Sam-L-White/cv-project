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

        this.handleChange = this.handleChange.bind(this)
    }

    handleChange = (e) => {

        const {name, value} = e.target
        console.log(this.state.fields.inputName)

        this.setState(prevState => ({
            fields: {
                ...prevState.fields,
                [name]: value

            }
        }));
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
                    <Preview
                        inputName={this.state.fields.inputName}
                        inputEmail={this.state.fields.inputEmail}
                        inputTelephone={this.state.fields.inputTelephone}
                        inputSchoolName={this.state.fields.inputSchoolName}
                        inputTitle={this.state.fields.inputTitle}
                        inputDate={this.state.fields.inputDate}
                        inputCompany={this.state.fields.inputCompany}
                        inputPositionTitle={this.state.fields.inputPositionTitle}
                        inputTasks={this.state.fields.inputTasks}
                        inputDateFrom={this.state.fields.inputDateFrom}
                        inputDateTo={this.state.fields.inputDateTo}
                    />
                </div>
            </div>
        )
    }
}
export default App;