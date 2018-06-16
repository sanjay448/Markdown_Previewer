import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import ControlLabel from 'react-bootstrap/lib/ControlLabel'; //this is the title of the text area
import FormControl from 'react-bootstrap/lib/FormControl' ; // this is the actual text area

const marked = require("marked");

class App extends Component {
  constructor(props){
    super(props);
    this.state={mark: ''};
    this.handleChange= this.handleChange.bind(this);
  }
  handleChange(event){

    this.setState({mark: event.target.value})
  }

  render() {

    return (

      <div className="App container">
        <div className="bg-success" >
          <FormGroup controlId="formControlsTextarea" >
          <ControlLabel>EDITOR</ControlLabel>
          <FormControl componentClass="textarea" onChange={this.handleChange} ></FormControl>
          </FormGroup>
        </div>
        <div className="bg-success">
        <h1>MARKDOWN PREVIEWER</h1>
         <div dangerouslySetInnerHTML = {{__html:marked(this.state.mark)}} >

        </div>
        </div>
       </div>
    );
  }
}

export default App;
