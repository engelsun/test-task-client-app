import React from "react";
import axios from "axios";
import ClientListItem from "./ClientListItem";
import {store} from "../index";
import {addClients} from "../store/actions";
import {connect} from "react-redux";

const link = "http://www.mocky.io/v2/5b35c5e62f00006e003763b7";

class ClientList extends React.Component {

    state = {
        isFirstRender: true,
        renderClients: []
    };

    componentWillReceiveProps(nextProps) {
        this.setState({
            renderClients: this.checkBeforeRendering(nextProps)
        });
    }

    checkBeforeRendering(nextProps) {
        const {clients, filteredClients} = nextProps;
        let renderClients;
        if (this.state.isFirstRender) {
            renderClients = clients;
            this.setState({isFirstRender: false})
        } else renderClients = filteredClients;
        return renderClients;
    }

    render() {
        return (
            <div className="ui divided list">
                {this.state.renderClients.map((client, index) =>
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
        clients: state.clients,
        filteredClients: state.filteredClients
    }
}

export default connect(mapStateToProps)(ClientList);