import React, { Component } from 'react';
import './App.css';
import ClientList from "./components/ClientList";
import SearchBar from "./components/SearchBar";

class App extends Component {
  render() {
    return (
      <div className="App">
        <SearchBar/>
        <ClientList/>
      </div>
    );
  }
}

export default App;
