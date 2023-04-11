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
                    <input
                        type="text" 
                        name="inputSchoolName" 
                        id="inputSchoolName"
                        onChange={this.handleChange}
                        value={this.state.fields.inputSchoolName}
                    />
                    <input 
                        type="text" 
                        name="inputTitle" 
                        id="inputTitle"
                        onChange={this.handleChange}
                        value={this.state.fields.inputTitle}
                    />
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