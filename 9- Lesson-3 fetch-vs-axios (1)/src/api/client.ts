import axios from "axios";

const client = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 100000,
});

client.interceptors.request.use(
  (config) => {
    // Can add headers to each request.
    config.headers[
      "Authorization"
    ] = `Bearer eakdjaskjdakdjaljsdljadjakdjakjaklds`;
    return config;
  },
  (error) => Promise.reject(error)
);

client.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => Promise.reject(error)
);

export default client;
