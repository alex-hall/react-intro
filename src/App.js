import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    constructor(props){
        super(props);

        this.state = {
            additionalElements: []
        }
    }

    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h2>Welcome to React</h2>
                </div>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>
                <input type="button" onClick={this.addElement.bind(this)} name="click"/>
                {this.state.additionalElements.map(() => { return (<div>I'm Some DIV</div>)})}
            </div>
        );
    }

    addElement(){
        this.setState({...this.state,
            additionalElements: [1]
        })
    }
}

export default App;
