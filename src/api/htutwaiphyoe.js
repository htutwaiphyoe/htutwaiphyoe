import axios from "axios";

const instance = axios.create({
    baseURL: "https://portfolio-80db9.firebaseio.com",
});

export default instance;
