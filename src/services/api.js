import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:8080"
});

export const getProdutos = () => api.get("/produtos").then((res) => res.data);

export const getProdutoById = (id) => api.get(`/produtos/${id}`).then((res) => res.data);

export const createAvaliacao = (body) => api.post(`/review`, body).then((res) => res.data);