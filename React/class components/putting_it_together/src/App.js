
import React, { Component } from 'react';
import './App.css';
import PersonCard from './Components/PersonCard';

class App extends Component {
  render() {
    return (
      <div className="App">
        <PersonCard firstName= {"Doe"} lastName = {"Jane"} age = {45} hairColor = {"Black"} / >
        <PersonCard firstName= {"Smith"} lastName = {"John"} age = {88} hairColor = {"Brown"} / >
      </div>
    );
}
}


export default App;
