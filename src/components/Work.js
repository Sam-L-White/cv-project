import React, {Component} from "react";

class Work extends Component{
    constructor(props){
        super(props);

    }

    render(){
        const {keyProp, handleChange, inputCompany, inputPositionTitle, inputTasks, inputDateFrom, inputDateTo} = this.props
        return(
            <div>
                <form className="grid gap-5 p-5 grid-rows-2 border-t-2 border-black">
                    <input
                        className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-yellow-500"
                        type="text" 
                        name="inputCompany" 
                        id={keyProp}
                        onChange={handleChange}
                        value={inputCompany}
                    />
                    <input
                        className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-yellow-500"
                        type="text" 
                        name="inputPositionTitle" 
                        id={keyProp}
                        onChange={handleChange}
                        value={inputPositionTitle}
                    />
                    <input
                        className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-yellow-500"
                        type="text" 
                        name="inputTasks" 
                        id={keyProp}
                        onChange={handleChange}
                        value={inputTasks}
                    />
                    <input
                        className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-yellow-500"
                        type="date" 
                        name="inputDateFrom" 
                        id={keyProp}
                        onChange={handleChange}
                        value={inputDateFrom}
                    />
                    <input
                        className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-yellow-500"
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