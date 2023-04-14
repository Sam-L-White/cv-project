import React, {Component} from "react";

class Preview extends Component{
    constructor(props){
        super(props);

    }
    

    render(){
        const {inputName, inputEmail, inputTelephone, educationForms, workForms} = this.props
        return(
            <div>
                <div className="aboutInfo">
                    <h1>{inputName}</h1>
                    <h2>{inputEmail}</h2>
                    <h3>{inputTelephone}</h3>
                </div>
                <div className="educationInfo">
                    <h2>Education</h2>
                    {educationForms.map((form) => {
                        return (
                            <div key={form.id}>
                                <p>{form.inputDate}</p>
                                <p>{form.inputSchoolName}: {form.inputTitle}</p>
                            </div>
                        )
                    })}
                </div>
                <div className="workInfo">
                    <h2>Work Experience</h2>
                    {workForms.map((form) => {
                        return (
                            <div key={form.id}>
                                <p>{form.inputCompany}: {form.inputDateFrom} to {form.inputDateTo}</p>
                                <p>{form.inputPositionTitle}</p>
                                <p>{form.inputTasks}</p>
                            </div>
                        )
                    })}
                </div>
                
            </div>
        )
    }
}

export {Preview}