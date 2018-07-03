import React from 'react';
import {connect} from 'react-redux';

class ClientDetails extends React.Component {
    render() {
        const client = this.props.selectedClient;
        if (client.length === 0)
            return (<h1 className="ui header">Please choose a client</h1>);
        else return (
            <div className="ui segment">
                <img className="ui circular tiny image" src={client.general.avatar} alt=""/>
                <div className="content">
                    <h1 className="header">{client.general.firstName} {client.general.lastName}</h1>
                    <div className="description">{client.job.title} - {client.job.company}</div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        selectedClient: state.selectedClient
    }
}

export default connect(mapStateToProps)(ClientDetails);