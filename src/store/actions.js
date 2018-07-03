const ADD_CLIENTS = "ADD_CLIENTS";
const ADD_FILTERED_CLIENT = "ADD_FILTERED_CLIENT";
const REMOVE_ALL_FILTERED = "REMOVE_ALL_FILTERED";
const ADD_SELECTED_CLIENT = "ADD_SELECTED_CLIENT";

export {
    ADD_CLIENTS,
    ADD_FILTERED_CLIENT,
    REMOVE_ALL_FILTERED,
    ADD_SELECTED_CLIENT
}

export function addClients(clients) {
    return {
        type: ADD_CLIENTS,
        payload: clients
    }
}

export function addFilteredClient(clients) {
    return {
        type: ADD_FILTERED_CLIENT,
        payload: clients
    }
}

export function removeAllFiltered() {
    return {
        type: REMOVE_ALL_FILTERED
    }
}

export function addSelectedClient(client) {
    return {
        type: ADD_SELECTED_CLIENT,
        payload: client
    }
}