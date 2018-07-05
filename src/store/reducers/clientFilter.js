import {ADD_SEARCH_TEXT} from "../actions";

export default function (state = initialState, action) {
    if (action.type === ADD_SEARCH_TEXT) {
        return {searchText: action.payload};
    }
    return initialState;
}

let initialState = {
    searchText: ""
};

export function getFilteredClients(state) {
    let clients = state.clients;
    initialState.searchText = state.clientFilter.searchText;
    return clients.filter(client => {
        if (isClientContains(client.general.firstName)) return client;
        if (isClientContains(client.job.company)) return client;
        if (isClientContains(client.job.title)) return client;
        if (isClientContains(client.contact.email)) return client;
        if (isClientContains(client.contact.phone)) return client;
        if (isClientContains(client.address.street)) return client;
        if (isClientContains(client.address.city)) return client;
        if (isClientContains(client.address.zipCode)) return client;
        if (isClientContains(client.address.country)) return client;
    });
}

const isClientContains = (clientInfo) => {
    let regXp = initialState.searchText.toLowerCase();
    return clientInfo.toLowerCase().includes(regXp);
};