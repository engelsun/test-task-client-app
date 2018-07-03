import {ADD_CLIENTS} from "../actions";

export default function (state = [], action) {
    if (action.type === ADD_CLIENTS) {
        state = [...state, ...action.payload];
    }
    return state;
};