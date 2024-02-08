import axios from "axios";

export const AxiosSource = axios.create({
    baseURL: "https://zingzest-server.vercel.app",
    withCredentials : true
})
const useAxios = () => {
    return AxiosSource
};

export default useAxios;