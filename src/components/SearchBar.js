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
        let filterClients = this.filterClients();
        console.log(filterClients);
    }

    filterClients() {
        return this.props.clients.filter(person => {
            if (this.isClientContains(person.general.firstName)) return person;
            if (this.isClientContains(person.job.company)) return person;
            if (this.isClientContains(person.job.title)) return person;
            if (this.isClientContains(person.contact.email)) return person;
            if (this.isClientContains(person.contact.phone)) return person;
            if (this.isClientContains(person.address.street)) return person;
            if (this.isClientContains(person.address.city)) return person;
            if (this.isClientContains(person.address.zipCode)) return person;
            if (this.isClientContains(person.address.country)) return person;
        });
    }

    isClientContains(clientInfo) {
        let regXp = this.inputValue.toLowerCase();
        return clientInfo.toLowerCase().includes(regXp);
    }
}

function mapStateToProps(state) {
    return {
        clients: state.clients
    }
}

export default connect(mapStateToProps)(SearchBar);