import React, {Component} from "react";

class About extends Component{
    constructor(props){
        super(props);

    }

    render(){
        const {inputName, inputEmail, inputTelephone, handleChange} = this.props
        return(
            <div>
                <form className="grid gap-5 p-5 border-t-2 border-black">
                    <input
                        className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-yellow-500"
                        type="text" 
                        name="inputName" 
                        id="inputName"
                        onChange={handleChange}
                        value={inputName}
                    />
                    <input
                        className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-yellow-500"
                        type="text" 
                        name="inputEmail" 
                        id="inputEmail"
                        onChange={handleChange}
                        value={inputEmail}
                    />
                    <input
                        className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-yellow-500"
                        type="text" 
                        name="inputTelephone" 
                        id="inputTelephone"
                        onChange={handleChange}
                        value={inputTelephone}
                    />
                </form>
            </div>
        )
    }
}

export {About}