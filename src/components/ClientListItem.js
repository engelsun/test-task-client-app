import React from "react";

class ClientListItem extends React.Component {
    constructor(props) {
        super(props);
        this.props = props
    }

    props = {
        client: []
    };

    render() {
        const client = this.props.client;
        return (
            <div className="item">
                <img className="ui circular tiny image" src={client.general.avatar} alt=""/>
                <div className="content">
                    <h1 className="header">{client.general.firstName} {client.general.lastName}</h1>
                    <div className="description">{client.job.title}</div>
                </div>
            </div>
        )
    }
}

export default ClientListItem;