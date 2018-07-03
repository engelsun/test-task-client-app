const ADD_CLIENTS = "ADD_CLIENTS";

export {
    ADD_CLIENTS
}

export default function addClients(clients) {
    return {
        type: ADD_CLIENTS,
        payload: clients
    }
}