import React from "react";
import axios from "axios";

const link = "http://www.mocky.io/v2/5b35c5e62f00006e003763b7";

class ClientList extends React.Component {

    state = {
        clients: []
    };

    render() {
        return (
            <div className="ui divided list">
                {this.state.clients.map(client =>
                    <div className="item">
                        <img className="ui circular tiny image" src={client.general.avatar}/>
                        <div className="content">
                            <h1 className="header">{client.general.firstName} {client.general.lastName}</h1>
                            <div className="description">{client.job.title}</div>
                        </div>
                    </div>)}
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