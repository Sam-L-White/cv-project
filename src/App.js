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
            educationForms: [
                {
                    inputSchoolName: "School Name",
                    inputTitle: "Title of Study",
                    inputDate: "Date",
                    id: uniqid()
                }
            ],
            workForms: [
                {
                    inputCompany: "Company Name",
                    inputPositionTitle: "Position Title",
                    inputTasks: "Tasks",
                    inputDateFrom: new Date().toISOString().split('T')[0],
                    inputDateTo: new Date().toISOString().split('T')[0],
                    id: uniqid()
                }
            ]
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

        const {name, value, id} = e.target

        this.setState(prevState => ({
            educationForms: prevState.educationForms.map(form => (form.id === id) ? {...form, [name]: value} : form)
        }));
    };

    handleWorkChange = (e) => {

        const {name, value, id} = e.target

        this.setState(prevState => ({
            workForms: prevState.workForms.map(form => (form.id === id) ? {...form, [name]: value} : form)
        }));
    };

    addEducationForm = () => {

        const educationFields = {
            inputSchoolName: "School Name",
            inputTitle: "Title of Study",
            inputDate: "Date",
            id: uniqid()
        }
  
        this.setState({
            educationForms: this.state.educationForms.concat(educationFields)
        })

    }

    addWorkForm = () => {

        const workFields = {
            inputCompany: "Company Name",
            inputPositionTitle: "Position Title",
            inputTasks: "Tasks",
            inputDateFrom: new Date().toISOString().split('T')[0],
            inputDateTo: new Date().toISOString().split('T')[0],
            id: uniqid()
        }
  
        this.setState({
            workForms: this.state.workForms.concat(workFields)
        })

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
                    {this.state.educationForms.map((educationForm, i) => {
                        return  <Education
                        key={educationForm.id}
                        keyProp={educationForm.id}
                        inputSchoolName={educationForm.inputSchoolName}
                        inputTitle={educationForm.inputTitle}
                        inputDate={educationForm.inputDate}
                        handleChange={this.handleEducationChange}
                    />
                    })}
                    <button onClick={this.addEducationForm}> + </button>
                    {this.state.workForms.map((workForm, i) => {
                        return  <Work
                        key={workForm.id}
                        keyProp={workForm.id}
                        inputCompany={workForm.inputCompany}
                        inputPositionTitle={workForm.inputPositionTitle}
                        inputTasks={workForm.inputTasks}
                        inputDateFrom={workForm.inputDateFrom}
                        inputDateTo={workForm.inputDateTo}
                        handleChange={this.handleWorkChange}
                    />
                    })}
                    <button onClick={this.addWorkForm}> + </button>
                </div>
                <div className="previewContainer">
                    <Preview
                    />
                </div>
            </div>
        )
    }
}
export default App;