import axios from 'axios';

const api = axios.create({
  baseURL: 'http://127.0.0.1:8000/api', // Set base URL for all requests
  timeout: 5000, // Set timeout for requests in milliseconds
  headers: {
    'Content-Type': 'application/json',
    // Add other default headers here
  }
});

export default api;
