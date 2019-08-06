import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://burger-react-db71a.firebaseio.com/'
});

export default axiosInstance;
