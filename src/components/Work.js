import React, {Component} from "react";

class Work extends Component{
    constructor(props){
        super(props);

    }

    render(){
        const {keyProp, handleChange, inputCompany, inputPositionTitle, inputTasks, inputDateFrom, inputDateTo} = this.props
        return(
            <div>
                <form>
                    <input
                        type="text" 
                        name="inputCompany" 
                        id={keyProp}
                        onChange={handleChange}
                        value={inputCompany}
                    />
                    <input 
                        type="text" 
                        name="inputPositionTitle" 
                        id={keyProp}
                        onChange={handleChange}
                        value={inputPositionTitle}
                    />
                    <input 
                        type="text" 
                        name="inputTasks" 
                        id={keyProp}
                        onChange={handleChange}
                        value={inputTasks}
                    />
                    <input 
                        type="date" 
                        name="inputDateFrom" 
                        id={keyProp}
                        onChange={handleChange}
                        value={inputDateFrom}
                    />
                    <input 
                        type="date" 
                        name="inputDateTo" 
                        id={keyProp}
                        onChange={handleChange}
                        value={inputDateTo}
                    />
                </form>
            </div>
        )
    }
}

export {Work}