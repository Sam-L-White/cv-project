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
                        id={this.props.keyProp}
                        onChange={this.props.handleChange}
                        value={this.props.inputSchoolName}
                    />
                    <input 
                        type="text" 
                        name="inputTitle" 
                        id={this.props.keyProp}
                        onChange={this.props.handleChange}
                        value={this.props.inputTitle}
                    />
                    <input 
                        type="text" 
                        name="inputDate" 
                        id={this.props.keyProp}
                        onChange={this.props.handleChange}
                        value={this.props.inputDate}
                    />
                </form>
            </div>
        )
    }
}

export {Education}