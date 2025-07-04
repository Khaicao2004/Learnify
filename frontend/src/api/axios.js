import axios from 'axios'

const axiosInstance = axios.create(
    {
        baseURL: 'http://127.0.0.1:8000/api/',
        withCredentials: true,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }

    }
);

axiosInstance.interceptors.request.use((config) => {
    const token = localStorage.getItem('ACCESS_TOKEN');
    config.headers.Authorization = `Bearer ${token}`;
    return config;
})

axiosInstance.interceptors.request.use(
    (response) => {
        return response;
    }, 
    (error) => {
        const {response} = error;
        if (response.status === 401) {
            localStorage.removeItem('ACCESS_TOKEN');
        }
        throw error;
    }, 
);

export default axiosInstance;