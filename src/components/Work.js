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
                        id={this.props.keyProp}
                        onChange={this.props.handleChange}
                        value={this.props.inputCompany}
                    />
                    <input 
                        type="text" 
                        name="inputPositionTitle" 
                        id={this.props.keyProp}
                        onChange={this.props.handleChange}
                        value={this.props.inputPositionTitle}
                    />
                    <input 
                        type="text" 
                        name="inputTasks" 
                        id={this.props.keyProp}
                        onChange={this.props.handleChange}
                        value={this.props.inputTasks}
                    />
                    <input 
                        type="date" 
                        name="inputDateFrom" 
                        id={this.props.keyProp}
                        onChange={this.props.handleChange}
                        value={this.props.inputDateFrom}
                    />
                    <input 
                        type="date" 
                        name="inputDateTo" 
                        id={this.props.keyProp}
                        onChange={this.props.handleChange}
                        value={this.props.inputDateTo}
                    />
                </form>
            </div>
        )
    }
}

export {Work}