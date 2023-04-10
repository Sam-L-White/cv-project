import React, {Component} from "react";
import { About } from "./components/About";
import { Education } from "./components/Education";
import { Preview } from "./components/Preview";
import { Work } from "./components/Work"

class App extends Component {
    constructor(){
        super();
    }

    render(){
        return(
            <div className="container">
                <div className="inputContainer">
                    <About />
                    <Education />
                    <Work />
                </div>
                <div className="previewContainer">
                    <Preview />
                </div>
            </div>
        )
    }
}
export default App;