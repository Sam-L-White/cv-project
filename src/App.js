import React, {Component} from "react";
import { About } from "./components/About";
import { Education } from "./components/Education";
import { Preview } from "./components/Preview";
import { Work } from "./components/Work"
import "./styles/App.css"
import uniqid from "uniqid";

class App extends Component {
    constructor(){
        super();

        this.state = {
            aboutFields: {
                inputName: "Name",
                inputEmail: "Email",
                inputTelephone: "Telephone",
                id: uniqid()
            },
            educationFields: {
                inputSchoolName: "School Name",
                inputTitle: "Title of Study",
                inputDate: "Date",
                id: uniqid()
            },
            workFields: {
                inputCompany: "Company Name",
                inputPositionTitle: "Position Title",
                inputTasks: "Tasks",
                inputDateFrom: new Date().toISOString().split('T')[0],
                inputDateTo: new Date().toISOString().split('T')[0],
                id: uniqid()
            },
            educationForms: [],
            workForms: []
        }
    }

    handleAboutChange = (e) => {

        const {name, value} = e.target

        this.setState(prevState => ({
            aboutFields: {
                ...prevState.aboutFields,
                [name]: value

            }
        }));
    };

    handleEducationChange = (e) => {

        const {name, value} = e.target

        this.setState(prevState => ({
            educationFields: {
                ...prevState.educationFields,
                [name]: value

            }
        }));
    };

    handleWorkChange = (e) => {

        const {name, value} = e.target

        this.setState(prevState => ({
            workFields: {
                ...prevState.workFields,
                [name]: value

            }
        }));
    };

    addEducationForm = () => {
        
    }


    render(){
        return(
            <div className="container">
                <div className="inputContainer">
                    <About 
                        inputName={this.state.aboutFields.inputName}
                        inputEmail={this.state.aboutFields.inputEmail}
                        inputTelephone={this.state.aboutFields.inputTelephone}
                        handleChange={this.handleAboutChange}
                    />
                    <Education
                        inputSchoolName={this.state.educationFields.inputSchoolName}
                        inputTitle={this.state.educationFields.inputTitle}
                        inputDate={this.state.educationFields.inputDate}
                        handleChange={this.handleEducationChange}
                    />
                    <Work
                        inputCompany={this.state.workFields.inputCompany}
                        inputPositionTitle={this.state.workFields.inputPositionTitle}
                        inputTasks={this.state.workFields.inputTasks}
                        inputDateFrom={this.state.workFields.inputDateFrom}
                        inputDateTo={this.state.workFields.inputDateTo}
                        handleChange={this.handleWorkChange}
                    />
                </div>
                <div className="previewContainer">
                    <Preview
                        inputName={this.state.aboutFields.inputName}
                        inputEmail={this.state.aboutFields.inputEmail}
                        inputTelephone={this.state.aboutFields.inputTelephone}
                        inputSchoolName={this.state.educationFields.inputSchoolName}
                        inputTitle={this.state.educationFields.inputTitle}
                        inputDate={this.state.educationFields.inputDate}
                        inputCompany={this.state.workFields.inputCompany}
                        inputPositionTitle={this.state.workFields.inputPositionTitle}
                        inputTasks={this.state.workFields.inputTasks}
                        inputDateFrom={this.state.workFields.inputDateFrom}
                        inputDateTo={this.state.workFields.inputDateTo}
                    />
                </div>
            </div>
        )
    }
}
export default App;