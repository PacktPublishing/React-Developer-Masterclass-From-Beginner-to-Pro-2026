import axios from "axios";
import type { Product } from "../types";

const API_URL = "https://68e3726e8e14f4523dad6c49.mockapi.io/api/v1/products";

export const getProducts = async (): Promise<Product[]> => {
  const { data } = await axios.get<Product[]>(API_URL);
  return data;
};
