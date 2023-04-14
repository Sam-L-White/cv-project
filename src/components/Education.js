import React, {Component} from "react";

class Education extends Component{
    constructor(props){
        super(props);

    }

    render(){
        const {keyProp, handleChange, inputSchoolName, inputTitle, inputDate} = this.props
        return(
            <div>
                <form>
                    <input
                        type="text" 
                        name="inputSchoolName" 
                        id={keyProp}
                        onChange={handleChange}
                        value={inputSchoolName}
                    />
                    <input 
                        type="text" 
                        name="inputTitle" 
                        id={keyProp}
                        onChange={handleChange}
                        value={inputTitle}
                    />
                    <input 
                        type="text" 
                        name="inputDate" 
                        id={keyProp}
                        onChange={handleChange}
                        value={inputDate}
                    />
                </form>
            </div>
        )
    }
}

export {Education}