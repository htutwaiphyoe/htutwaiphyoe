import axios from "axios";

const instance = axios.create({
    // baseURL: "https://portfolio-80db9.firebaseio.com",
    baseURL: "http://localhost:9000",
    headers: {
        Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
    },
});

export default instance;
