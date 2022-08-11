import React , {Component} from "react";
import Clock from "./Clock";
import './index.css';
class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            deadline : "june 3, 2023",
            newDeadline : "",
        }
    }

    changeDeadline(){
        this.setState({deadline:this.state.newDeadline});
    }
    changeNewDeadline(newDeadline){
        this.setState({newDeadline});
    }

    render(){
        return (
            <center>
                <div>
                    <div className="title">Countdown to {this.state.deadline}</div> 
                    <Clock deadline={this.state.deadline}/>
                    <div>
                        <input type="text" placeholder="new data" onChange={(event)=> this.changeNewDeadline(event.target.value)}/>
                        <button onClick={()=>this.changeDeadline()}>Submit</button>
                    </div>
                </div>
            </center>
        );
    }
}

export default App;
