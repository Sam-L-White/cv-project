import React, {Component} from "react";
import { About } from "./components/About";
import { Education } from "./components/Education";
import { Preview } from "./components/Preview";
import { Work } from "./components/Work"
import uniqid from "uniqid";
import "./index.css"

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
        const {inputName, inputEmail, inputTelephone} = this.state.aboutFields
        return(
            <div className="grid justify-center h-screen grid-cols-[35vw_35vw] grid-rows-[10%_80%_10%] gap-[30px]">
                <div className="flex flex-col col-[1_/_2] row-[2_/_3] justify-center p-[30px] border-[3px] border-solid border-[black] gap-10 h-max">
                    <div className="">
                        <div className="text-xl">About</div>
                        <About
                            inputName={inputName}
                            inputEmail={inputEmail}
                            inputTelephone={inputTelephone}
                            handleChange={this.handleAboutChange}
                        />
                    </div>
                    <div className="flex flex-col">
                        <div className="text-xl">Education</div>
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
                        <button className="bg-yellow-400 hover:bg-yellow-500 text-white font-bold py-2 px-4 rounded self-center w-24" onClick={this.addEducationForm}> + </button>
                    </div>
                    <div className="flex flex-col">
                        <div className="text-xl">Work Experience</div>
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
                        <button className="bg-yellow-400 hover:bg-yellow-500 text-white font-bold py-2 px-4 rounded self-center w-24" onClick={this.addWorkForm}> + </button>
                    </div>
                </div>
                <div className="flex flex-col col-[2_/_3] row-[2_/_3] h-max p-[30px] border-[3px] border-solid border-[black]">
                    <Preview
                        inputName={this.state.aboutFields.inputName}
                        inputEmail={this.state.aboutFields.inputEmail}
                        inputTelephone={this.state.aboutFields.inputTelephone}
                        educationForms={this.state.educationForms}
                        workForms={this.state.workForms}
                    />
                </div>
            </div>
        )
    }
}
export default App;