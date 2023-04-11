import React, {Component} from "react";

class Work extends Component{
    constructor(props){
        super(props);

    }

    render(){
        return(
            <div>
                <form>
                    <input
                        type="text" 
                        name="inputCompany" 
                        id="inputCompany"
                        onChange={this.props.handleChange}
                        value={this.props.inputCompany}
                    />
                    <input 
                        type="text" 
                        name="inputPositionTitle" 
                        id="inputPositionTitle"
                        onChange={this.props.handleChange}
                        value={this.props.inputPositionTitle}
                    />
                    <input 
                        type="text" 
                        name="inputTasks" 
                        id="inputTasks"
                        onChange={this.props.handleChange}
                        value={this.props.inputTasks}
                    />
                    <input 
                        type="date" 
                        name="inputDateFrom" 
                        id="inputDateFrom"
                        onChange={this.props.handleChange}
                        value={this.props.inputDateFrom}
                    />
                    <input 
                        type="date" 
                        name="inputDateTo" 
                        id="inputDateTo"
                        onChange={this.props.handleChange}
                        value={this.props.inputDateTo}
                    />
                </form>
            </div>
        )
    }
}

export {Work}