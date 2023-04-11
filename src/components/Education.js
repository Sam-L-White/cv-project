import React, {Component} from "react";

class Education extends Component{
    constructor(props){
        super(props);

    }

    render(){
        return(
            <div>
                <form>
                    <input
                        type="text" 
                        name="inputSchoolName" 
                        id="inputSchoolName"
                        onChange={this.props.handleChange}
                        value={this.props.inputSchoolName}
                    />
                    <input 
                        type="text" 
                        name="inputTitle" 
                        id="inputTitle"
                        onChange={this.props.handleChange}
                        value={this.props.inputTitle}
                    />
                    <input 
                        type="text" 
                        name="inputDate" 
                        id="inputDate"
                        onChange={this.props.handleChange}
                        value={this.props.inputDate}
                    />
                </form>
            </div>
        )
    }
}

export {Education}