import axios from "axios";

// Vite exposes environment variables on import.meta.env.
// Variables that should be exposed to the client must be prefixed with VITE_.
const API_BASE_URL = (import.meta as any).env?.VITE_API_BASE_URL || "";

const client = axios.create({
  baseURL: API_BASE_URL,
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
