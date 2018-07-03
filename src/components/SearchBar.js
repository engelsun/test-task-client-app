import React from "react";
import {connect} from "react-redux";
import {store} from "../index";
import {addFilteredClient, removeAllFiltered} from "../store/actions";

class SearchBar extends React.Component {
    constructor() {
        super();
        this.inputValue = "";
    }

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
        this.inputValue = e.target.value;
        let filteredClients = this.filterClients();
        if (filteredClients.length > 0) {
            store.dispatch(removeAllFiltered());
            store.dispatch(addFilteredClient(filteredClients));
        } else store.dispatch(removeAllFiltered());
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
        clients: state.clients,
        filteredClients: state.filteredClients
    }
}

export default connect(mapStateToProps)(SearchBar);