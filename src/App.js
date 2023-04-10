import React, {Component} from "react";
import { About } from "./components/About";

class App extends Component {
    constructor(){
        super();
    }

    render(){
        return(
            <div className="container">
                <div className="inputContainer">
                    <About />
                </div>
                <div className="previewContainer">

                </div>
            </div>
        )
    }
}
export default App;