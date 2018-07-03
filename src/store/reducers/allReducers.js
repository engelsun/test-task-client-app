import {combineReducers} from "redux";
import clients from "./clients";
import filteredClients from "./filteredClients";
import selectedClient from "./selectedClient";

const allReducers = combineReducers({
    clients: clients,
    filteredClients: filteredClients,
    selectedClient: selectedClient
});

export default allReducers;