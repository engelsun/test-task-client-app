import React, { Component } from 'react';
import './App.css';
import ClientList from "./components/ClientList";

class App extends Component {
  render() {
    return (
      <div className="App">
        <ClientList/>
      </div>
    );
  }
}

export default App;
