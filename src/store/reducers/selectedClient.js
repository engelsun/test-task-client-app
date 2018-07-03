import {ADD_SELECTED_CLIENT} from "../actions";

export default function (state = [], action) {
    if (action.type === ADD_SELECTED_CLIENT) {
        state = action.payload;
    }
    return state;
};