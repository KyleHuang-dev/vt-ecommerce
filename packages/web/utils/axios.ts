import axios from "axios";

const API_URL = "http://localhost:2121/products";

export async function getProducts() {
    const response = await axios.get(`${API_URL}`);
    const data = await response.data;
    return data;
}
