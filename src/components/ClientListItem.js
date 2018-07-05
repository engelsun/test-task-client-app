import React from "react";
import {store} from "../index";
import {addSelectedClient} from "../store/actions";
import "../App.css"

class ClientListItem extends React.Component {
    render() {
        const client = this.props.client;
        return (
            <div onClick={this.selectClient.bind(this)} className="item">
                <img className="ui circular tiny image" src={client.general.avatar} alt=""/>
                <div className="content">
                    <h1 className="header">{client.general.firstName} {client.general.lastName}</h1>
                    <div className="description">{client.job.title}</div>
                </div>
            </div>
        )
    }

    selectClient() {
        const client = this.props.client;
        store.dispatch(addSelectedClient(client))
    }
}

export default ClientListItem;