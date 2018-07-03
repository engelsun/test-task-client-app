import React, {Component} from 'react';
import './App.css';
import ClientList from "./components/ClientList";
import SearchBar from "./components/SearchBar";

class App extends Component {
    render() {
        return (
            <div className="ui equal width centered grid container">
                <div className="stretched row">
                    <div className=" six wide column">
                        <div className="ui segment">
                            <SearchBar/>
                            <ClientList/>
                        </div>
                    </div>
                    <div className="column">
                        <div className="ui segment">
                            <p></p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
