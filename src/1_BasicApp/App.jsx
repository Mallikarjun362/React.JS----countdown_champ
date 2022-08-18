import React , {Component} from "react";
import Clock from "./Clock";
import './App.css';
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
                <div className="top-div">
                    <div className="title">Countdown to {this.state.deadline}</div> 
                    <Clock deadline={this.state.deadline}/>
                    <div>
                        <center>
                            <input 
                                className="date-input-field" 
                                type="text" 
                                placeholder="new data" 
                                onChange={(event)=> this.changeNewDeadline(event.target.value)}
                                onKeyPress={(key)=>{
                                    if (key.code === 'Enter'){
                                        this.changeDeadline()
                                    }
                                }}
                            />
                            <button 
                                onClick={()=>this.changeDeadline()}
                                className='date-submit-button'
                            >Submit</button>
                        </center>
                    </div>
                    <div className="example-div">
                        <p>Eg.</p>
                        <br/>
                        <p>June 3, 2023 8:00 AM</p>
                        <p>MM DD YYYY</p>
                        <p></p>
                    </div>
                </div>
            </center>
        );
    }
}

export default App;
