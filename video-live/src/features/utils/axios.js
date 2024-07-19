import axios from 'axios';
const instance = axios.create({
    baseURL: 'https:localhost:900',

});

export default instance;