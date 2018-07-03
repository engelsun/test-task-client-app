import {combineReducers} from "redux";
import clients from "./clients";
import filteredClients from "./filteredClients";

const allReducers = combineReducers({
    clients: clients,
    filteredClients: filteredClients
});

export default allReducers;