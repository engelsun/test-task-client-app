import React from "react";
import ClientListItem from "./ClientListItem";
import {connect} from "react-redux";
import {loadClients} from "../controller/axiosController";

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

    componentWillMount() {
        loadClients();
    }

    render() {
        return (
            <div className="ui divided list">
                {this.state.renderClients.map((client, index) =>
                    <ClientListItem client={client} key={index}/>)}
            </div>
        )
    }

}

function mapStateToProps(state) {
    return {
        clients: state.clients,
        filteredClients: state.filteredClients
    }
}

export default connect(mapStateToProps)(ClientList);