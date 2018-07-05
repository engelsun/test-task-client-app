import React from "react";
import {store} from "../index";
import {addSearchText} from "../store/actions";

class SearchBar extends React.Component {
    render() {
        return (
            <div className="ui icon input fluid">
                <input className="prompt" onInput={this.handleInput.bind(this)} type="text"
                       placeholder="Enter some info about the client to search..."/>
                <i className="search icon"/>
            </div>
        )
    }

    handleInput(e) {
        let inputValue = e.target.value;
        store.dispatch(addSearchText(inputValue))
    }
}

export default SearchBar;