import React from 'react';
import {connect} from 'react-redux';
import ClientDetails from "./ClientDetails";

class ClientDetailsContainer extends React.Component {
    render() {
        const client = this.props.selectedClient;
        if (client.length !== 0) return <ClientDetails client={client}/>;
        else return (
            <div className="ui segment">
                <h1 className="ui centered header empty-selected-client">Please choose a client</h1>
            </div>);
    }
}

function mapStateToProps(state) {
    return {
        selectedClient: state.selectedClient
    }
}

export default connect(mapStateToProps)(ClientDetailsContainer);