import React from "react";
import {connect} from "react-redux";
import ClientList from "./ClientList";
import {loadClients} from "../controller/axiosController";
import {getFilteredClients} from "../store/reducers/clientFilter";

class ClientListContainer extends React.Component {
    componentWillMount() {
        loadClients();
    }

    render() {
        return <ClientList clients={this.props.filteredClients}/>
    }
}

function mapStateToProps(state) {
    return {
        filteredClients: getFilteredClients(state)
    }
}

export default connect(mapStateToProps)(ClientListContainer);