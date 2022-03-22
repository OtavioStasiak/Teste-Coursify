import axios from "axios";

const api = axios.create({baseURL: 'https://blog.coursify.me/wp-json/wp/v2/'});

export { api };