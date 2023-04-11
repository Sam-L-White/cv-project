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