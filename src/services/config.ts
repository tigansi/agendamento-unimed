import axios from "axios";

const config = axios.create({
  baseURL: "http://192.168.8.52:3000/",
});


export default config;