import React, {Component} from "react";

class Preview extends Component{
    constructor(props){
        super(props);

    }
    

    render(){
        return(
            <div>
                <div className="aboutInfo">
                    <h1>{this.props.inputName}</h1>
                    <h2>{this.props.inputEmail}</h2>
                    <h3>{this.props.inputTelephone}</h3>
                </div>
                <div className="educationInfo">
                    <h2>Education</h2>
                    <p>{this.props.inputDate}</p>
                    <p>{this.props.inputSchoolName}: {this.props.inputTitle}</p>
                </div>
                <div className="workInfo">
                    <h2>Work Experience</h2>
                    <p>{this.props.inputCompany}: {this.props.inputDateFrom} - {this.props.inputDateTo}</p>
                    <p>{this.props.inputPositionTitle}</p>
                    <p>{this.props.inputTasks}</p>
                </div>
                
            </div>
        )
    }
}

export {Preview}