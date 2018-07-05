import {combineReducers} from "redux";
import clients from "./clients";
import clientFilter from "./clientFilter";
import selectedClient from "./selectedClient";

const allReducers = combineReducers({
    clients: clients,
    clientFilter: clientFilter,
    selectedClient: selectedClient
});

export default allReducers;