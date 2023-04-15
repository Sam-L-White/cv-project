import React, {Component} from "react";

class Education extends Component{
    constructor(props){
        super(props);

    }

    render(){
        const {keyProp, handleChange, inputSchoolName, inputTitle, inputDate} = this.props
        return(
            <div>
                <form className="grid gap-5 p-5 border-t-2 border-black">
                    <input
                        className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-yellow-500"
                        type="text" 
                        name="inputSchoolName" 
                        id={keyProp}
                        onChange={handleChange}
                        value={inputSchoolName}
                    />
                    <input
                        className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-yellow-500"
                        type="text" 
                        name="inputTitle" 
                        id={keyProp}
                        onChange={handleChange}
                        value={inputTitle}
                    />
                    <input
                        className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-yellow-500"
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