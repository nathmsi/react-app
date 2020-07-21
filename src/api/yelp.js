import axios from 'axios'



const instance = axios.create({
    baseURL: 'http://localhost:8080'
})



export const interceptorsAxios = ({ getState }) => (next) => async (action) => {
    const token = getState().auth.token;
    instance.interceptors.request.use(
        (config) => {
            console.log(`%c ${config.method} ${config.url}`, "color:yellow");
            if (token) {
                config.headers.Authorization = `Bearer ${token}`
            }
            return config;
        },
        (err) => {
            console.log(err);
        }
    )
    next(action);
}




export default instance;