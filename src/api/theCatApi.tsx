import axios from "axios";

const theCatApi = axios.create({
    baseURL: 'https://api.thecatapi.com/v1',
    headers: {
        'x-api-key': 'live_FoArOzWEUfg5YsLsKKIgs2DNN7fTWBpfnbeScwZd9DvzVzUOlw94jfvrpZzxEOHm'
    }
})

export default theCatApi