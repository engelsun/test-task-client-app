import React from "react";
import axios from "axios";
import ClientListItem from "./ClientListItem";
import {store} from "../index";
import addClients from "../store/actions";
import {connect} from "react-redux";

const link = "http://www.mocky.io/v2/5b35c5e62f00006e003763b7";

class ClientList extends React.Component {

    state = {
        // clients: []
    };

    render() {
        return (
            <div className="ui divided list">
                {this.props.clients.map((client, index) =>
                    <ClientListItem client={client} key={index}/>)}
            </div>
        )
    }

    componentWillMount() {
        axios.get(link)
            .then(response => {
                const clients = response.data;
                store.dispatch(addClients(clients));
            })
            .catch(error => console.log(error));
    }
}

function mapStateToProps(state) {
    return {
        clients: state.clients
    }
}

export default connect(mapStateToProps)(ClientList);