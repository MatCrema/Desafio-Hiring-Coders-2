import axios from 'axios';

const api = axios.create({
    baseURL: 'https://my-json-server.typicode.com/MatCrema/Desafio-Hiring-Coders-2/produtos'
})

export default api;