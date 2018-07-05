import React from "react";
import ClientListItem from "./ClientListItem";

class ClientList extends React.Component {
    render() {
        return (
            <div className="ui divided list">
                {this.props.clients.map((client, index) =>
                    <ClientListItem client={client} key={index}/>)}
            </div>
        )
    }
}

export default ClientList;