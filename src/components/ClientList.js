import React from "react";
import axios from "axios";
import ClientListItem from "./ClientListItem";

const link = "http://www.mocky.io/v2/5b35c5e62f00006e003763b7";

class ClientList extends React.Component {

    state = {
        clients: []
    };

    render() {
        return (
            <div className="ui divided list">
                {this.state.clients.map((client, index) =>
                    <ClientListItem client={client} key={index}/>)}
            </div>
        )
    }

    componentDidMount() {
        axios.get(link)
            .then(response => {
                const clients = response.data;
                this.setState({clients: clients});
            })
            .catch(error => console.log(error));
    }
}

export default ClientList;