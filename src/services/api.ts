import axios from 'axios';

const apiList = axios.create({
  baseURL: 'https://pokeapi.co/api/v2',
});

export default apiList;