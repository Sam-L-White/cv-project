import React from "react";

const Preview = (props) => {

    const {inputName, inputEmail, inputTelephone, educationForms, workForms} = props
    return(
        <div className="flex flex-col gap-10">
            <div>
                <div className="text-5xl">{inputName}</div>
                <div>{inputEmail}</div>
                <div>{inputTelephone}</div>
            </div>
            <div className="educationInfo flex flex-col gap-5">
                <div className="text-xl">Education</div>
                {educationForms.map((form) => {
                    return (
                        <div key={form.id}>
                            <p>{form.inputDate}</p>
                            <p>{form.inputSchoolName}: {form.inputTitle}</p>
                        </div>
                    )
                })}
            </div>
            <div className="workInfo flex flex-col gap-5">
                <div className="text-xl">Work Experience</div>
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

export {Preview}