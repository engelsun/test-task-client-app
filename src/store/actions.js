const ADD_CLIENTS = "ADD_CLIENTS";
const ADD_SELECTED_CLIENT = "ADD_SELECTED_CLIENT";
const ADD_SEARCH_TEXT = "ADD_SEARCH_TEXT";

export {
    ADD_CLIENTS,
    ADD_SELECTED_CLIENT,
    ADD_SEARCH_TEXT
}

export function addClients(clients) {
    return {
        type: ADD_CLIENTS,
        payload: clients
    }
}

export function addSearchText(searchText) {
    return {
        type: ADD_SEARCH_TEXT,
        payload: searchText
    }
}

export function addSelectedClient(client) {
    return {
        type: ADD_SELECTED_CLIENT,
        payload: client
    }
}