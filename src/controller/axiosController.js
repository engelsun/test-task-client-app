import axios from "axios/index";
import {store} from "../index";
import {addClients} from "../store/actions";

const link = 'https://www.mocky.io/v2/5b35c5e62f00006e003763b7';
export const loadClients = () => {
    axios.get(link)
    .then(response => {
        const clients = response.data;
        store.dispatch(addClients(clients));
    })
    .catch(error => console.log(error));
};