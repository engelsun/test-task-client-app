import {ADD_FILTERED_CLIENT, REMOVE_ALL_FILTERED} from "../actions";

export default function (state = [], action) {
    if (action.type === ADD_FILTERED_CLIENT) state = [...state, ...action.payload];
    else if (action.type === REMOVE_ALL_FILTERED) state = [];
    return state;
}