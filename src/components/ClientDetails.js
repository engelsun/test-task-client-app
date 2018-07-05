import React from 'react';

class ClientDetails extends React.Component {
    render() {
        const client = this.props.client;
        return (
            <div className="ui segment detail-segment">
                <div className="ui grid">
                    <div className="five wide column">
                        <img className="ui image" src={client.general.avatar} alt=""/>
                    </div>
                    <div className="ui segment info">
                        <div className="row general">
                            <h1 className="header">{client.general.firstName} {client.general.lastName}</h1>
                            <div className="description">{client.job.title} - {client.job.company}</div>
                        </div>
                        <div className="row contacts">
                            <div className="ui segment">
                                <h2 className="ui header">Contacts</h2>
                                <div className="ui grid">
                                    <div className="description">email:</div>
                                    <div className="header">{client.contact.email}</div>
                                </div>
                                <div className="ui grid">
                                    <div className="description">phone:</div>
                                    <div className="header">{client.contact.phone}</div>
                                </div>
                            </div>
                        </div>
                        <div className="row address">
                            <div className="ui segment">
                                <h2 className="ui header">Address</h2>
                                <div className="ui grid">
                                    <div className="description">street:</div>
                                    <div className="header">{client.address.street}</div>
                                </div>
                                <div className="ui grid">
                                    <div className="description">city:</div>
                                    <div className="header">{client.address.city}</div>
                                </div>
                                <div className="ui grid">
                                    <div className="description">zip-code:</div>
                                    <div className="header">{client.address.zipCode}</div>
                                </div>
                                <div className="ui grid">
                                    <div className="description">country:</div>
                                    <div className="header">{client.address.country}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ClientDetails;