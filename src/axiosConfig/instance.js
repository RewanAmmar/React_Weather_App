import axios from "axios"

const axiosInstance = axios.create({
    baseURL : "https://api.openweathermap.org/data/2.5/",

    params: {
        api_key: "4e254c5325c5715fa57c27456126ee8d"
    }
})

axiosInstance.interceptors.request.use((config)=>{

    return config
}, (error) =>{
    return Promise.reject(error)
})

axiosInstance.interceptors.response.use((response) => {
    return response
}, (error) => {
    return Promise.reject(error)
})

export default axiosInstance;