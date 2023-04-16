import React, {useState, useEffect} from "react";
import { About } from "./components/About";
import { Education } from "./components/Education";
import { Preview } from "./components/Preview";
import { Work } from "./components/Work"
import uniqid from "uniqid";
import "./index.css"

const App = () => {

    const [aboutFields, setAboutFields] = useState({
        inputName: "Name",
        inputEmail: "Email",
        inputTelephone: "Telephone",
        id: uniqid()
    })

    const [educationForms, setEducationForms] = useState([
        {
            inputSchoolName: "School Name",
            inputTitle: "Title of Study",
            inputDate: "Date",
            id: uniqid()
        }
    ])

    const [workForms, setWorkForms] = useState([
        {
            inputCompany: "Company Name",
            inputPositionTitle: "Position Title",
            inputTasks: "Tasks",
            inputDateFrom: new Date().toISOString().split('T')[0],
            inputDateTo: new Date().toISOString().split('T')[0],
            id: uniqid()
        }
    ])

    function handleAboutChange(e){

        const {name, value, id} = e.target

        setAboutFields(prevState => ({

            ...prevState,
            [name]: value
        }));
    };

    function handleEducationChange(e){

        const {name, value, id} = e.target

        setEducationForms(prevState => {
            return prevState.map(form => (form.id === id) ? {...form, [name]: value} : form)
        });
    };

    function handleWorkChange(e){

        const {name, value, id} = e.target

        setWorkForms(prevState => {
            return prevState.map(form => (form.id === id) ? {...form, [name]: value} : form)  
        });
    };

    function addEducationForm(){

        const educationFields = {
            inputSchoolName: "School Name",
            inputTitle: "Title of Study",
            inputDate: "Date",
            id: uniqid()
        }
  
        setEducationForms(prevState => {
            return prevState.concat(educationFields)
        })

    }

    function addWorkForm(){

        const workFields = {
            inputCompany: "Company Name",
            inputPositionTitle: "Position Title",
            inputTasks: "Tasks",
            inputDateFrom: new Date().toISOString().split('T')[0],
            inputDateTo: new Date().toISOString().split('T')[0],
            id: uniqid()
        }
  
        setWorkForms(prevState => {
            return prevState.concat(workFields)
        })

    }

    const {inputName, inputEmail, inputTelephone} = aboutFields
    return(
        <div className="grid justify-center h-screen grid-cols-[35vw_35vw] grid-rows-[10%_80%_10%] gap-[30px]">
            <div className="flex flex-col col-[1_/_2] row-[2_/_3] justify-center p-[30px] border-[3px] border-solid border-[black] gap-10 h-max">
                <div className="flex flex-col">
                    <div className="text-xl">About</div>
                    <About
                        inputName={inputName}
                        inputEmail={inputEmail}
                        inputTelephone={inputTelephone}
                        handleChange={handleAboutChange}
                    />
                </div>
                <div className="flex flex-col">
                    <div className="text-xl">Education</div>
                    {educationForms.map((educationForm, i) => {
                        return  <Education
                        key={educationForm.id}
                        keyProp={educationForm.id}
                        inputSchoolName={educationForm.inputSchoolName}
                        inputTitle={educationForm.inputTitle}
                        inputDate={educationForm.inputDate}
                        handleChange={handleEducationChange}
                    />
                    })}
                    <button className="bg-yellow-400 hover:bg-yellow-500 text-white font-bold py-2 px-4 rounded self-center w-24" onClick={addEducationForm}> + </button>
                </div>
                <div className="flex flex-col">
                    <div className="text-xl">Work Experience</div>
                    {workForms.map((workForm, i) => {
                        return  <Work
                        key={workForm.id}
                        keyProp={workForm.id}
                        inputCompany={workForm.inputCompany}
                        inputPositionTitle={workForm.inputPositionTitle}
                        inputTasks={workForm.inputTasks}
                        inputDateFrom={workForm.inputDateFrom}
                        inputDateTo={workForm.inputDateTo}
                        handleChange={handleWorkChange}
                    />
                    })}
                    <button className="bg-yellow-400 hover:bg-yellow-500 text-white font-bold py-2 px-4 rounded self-center w-24" onClick={addWorkForm}> + </button>
                </div>
            </div>
            <div className="flex flex-col col-[2_/_3] row-[2_/_3] h-max p-[30px] border-[3px] border-solid border-[black]">
                <Preview
                    inputName={aboutFields.inputName}
                    inputEmail={aboutFields.inputEmail}
                    inputTelephone={aboutFields.inputTelephone}
                    educationForms={educationForms}
                    workForms={workForms}
                />
            </div>
        </div>
    )
}

export default App;