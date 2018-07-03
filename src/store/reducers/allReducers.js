import {combineReducers} from "redux";
import clients from "./clients";

const allReducers = combineReducers({
    clients: clients
});

export default allReducers;