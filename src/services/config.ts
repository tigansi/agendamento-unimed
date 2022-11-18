import axios from "axios";

const config = axios.create({
  baseURL: "http://192.168.1.102:3000/",
});


export default config;