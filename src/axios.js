import axios from 'axios';

// create an instance of axios to be used globally with given options
const instance = axios.create({
  baseURL: 'https://api.github.com/repos/'
});

export default instance;