import React from "react";
import {connect} from "react-redux";

class SearchBar extends React.Component {
    constructor() {
        super();
        this.inputValue = "";
    }
    render() {
        return (
            <div className="ui icon input fluid">
                <input className="prompt" onInput={this.handleInput.bind(this)} type="text"
                       placeholder="Enter some info about client to search..."/>
                <i className="search icon"/>
            </div>
        )
    }

    handleInput(e) {
        this.inputValue = e.target.value;
    }
}

function mapStateToProps(state) {
    return {
        clients: state.clients
    }
}

export default connect(mapStateToProps)(SearchBar);