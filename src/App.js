import React, {Component} from 'react';
import './App.css';
import SearchBar from "./components/SearchBar";
import ClientDetails from "./components/ClientDetails";
import ClientListContainer from "./components/ClientListContainer";

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
                        <ClientDetails/>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
