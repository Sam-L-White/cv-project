import React, {Component} from "react";

class Education extends Component{
    constructor(props){
        super(props);

        this.state = {
            fields: {
                inputSchoolName: "School Name",
                inputTitle: "Title of Study",
                inputDate: "Date"
            }
        }
    }

    handleChange = (e) => {
        switch(e.target.id){
            case "inputSchoolName":
                this.setState({
                    fields: {
                        inputSchoolName: e.target.value,
                        inputTitle: this.state.fields.inputTitle,
                        inputDate: this.state.fields.inputDate
                    }
                })
                break;

            case "inputTitle":
                this.setState({
                    fields: {
                        inputSchoolName: this.state.fields.inputSchoolName,
                        inputTitle: e.target.value,
                        inputDate: this.state.fields.inputDate
                    }
                })
                break;

            case "inputDate":
                this.setState({
                    fields: {
                        inputSchoolName: this.state.fields.inputSchoolName,
                        inputTitle: this.state.fields.inputTitle,
                        inputDate: e.target.value
                    }
                })
                break;

            default:
        }
    }

    render(){
        return(
            <div>
                <form>
                    <label htmlFor="inputSchoolName">School Name</label>
                    <input
                        type="text" 
                        name="inputSchoolName" 
                        id="inputSchoolName"
                        onChange={this.handleChange}
                        value={this.state.fields.inputSchoolName}
                    />
                    <label htmlFor="inputTitle">Title</label>
                    <input 
                        type="text" 
                        name="inputTitle" 
                        id="inputTitle"
                        onChange={this.handleChange}
                        value={this.state.fields.inputTitle}
                    />
                    <label htmlFor="inputDate">Date</label>
                    <input 
                        type="text" 
                        name="inputDate" 
                        id="inputDate"
                        onChange={this.handleChange}
                        value={this.state.fields.inputDate}
                    />
                </form>
            </div>
        )
    }
}

export {Education}