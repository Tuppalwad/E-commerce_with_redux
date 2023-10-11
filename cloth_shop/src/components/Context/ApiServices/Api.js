import axios from 'axios';
console.log(process.env.BACKEND_URL)
const Api = axios.create({
    baseURL: "http://localhost:5050",
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        "Allow-Control-Allow-Origin": "*"
    },
    timeout: 10000
});


export default Api;