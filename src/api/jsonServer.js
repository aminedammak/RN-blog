import axios from "axios";

const jsonServer = axios.create({
  baseURL: "http://206b-20-52-42-94.ngrok.io",
});

export default jsonServer;
