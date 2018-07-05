import React, {Component} from 'react';
import './App.css';
import SearchBar from "./components/SearchBar";
import ClientListContainer from "./components/ClientListContainer";
import ClientDetailsContainer from "./components/ClientDetailsContainer";

class App extends Component {
    render() {
        return (
            <div className="ui centered grid container">
                <div className="stretched row">
                    <div className="six wide column">
                        <div className="ui segment">
                            <SearchBar/>
                            <ClientListContainer/>
                        </div>
                    </div>
                    <div className="ten wide column">
                        <ClientDetailsContainer/>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
