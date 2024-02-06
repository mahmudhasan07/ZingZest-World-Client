import axios from "axios";

export const AxiosSource = axios.create({
    baseURL: "http://localhost:2000",
    withCredentials : true
})
const useAxios = () => {
    return AxiosSource
};

export default useAxios;