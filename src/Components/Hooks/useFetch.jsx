import { useQuery } from "@tanstack/react-query";
import useAxios, { AxiosSource } from "../Axios/useAxios";


const useFetch = (value1, value2) => {
    const axiosLink = useAxios(AxiosSource)
    const { isPending, error, data, refetch } = useQuery({
        queryKey: [`${value1}, ${value2}`],
        queryFn: async () => {
            const res = await axiosLink.get(`/${value1}?data=${value2}`)
            return res.data
        }
    })

    if (isPending) {
        return "loading"
    }
    if (error) {
        return `An error ${error.message}`
    }

    return [data, refetch]

};

export default useFetch;