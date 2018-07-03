import React from "react";

class SearchBar extends React.Component {
    render() {
        return (
            <div className="ui icon input fluid">
                <input className="prompt" type="text"
                       placeholder="Enter some info about client to search..."/>
                <i className="search icon"/>
            </div>
        )
    }
}

export default SearchBar;