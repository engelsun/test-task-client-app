import {ADD_CLIENTS, ADD_SELECTED_CLIENT} from "../actions";

export default function (state = [], action) {
    if (action.type === ADD_CLIENTS) {
        state = [...state, ...action.payload];
    }
    return state;
};