import useAxios, { AxiosSource } from "../Axios/useAxios";
import { useQuery } from '@tanstack/react-query'



const useFetch1 = (value1, value2,value3) => {
    const axiosLink = useAxios(AxiosSource)
    const { isPending, error, data,refetch } = useQuery({
        queryKey: [`${value1}, ${value2},${value3}`],
        queryFn: async () => {
            const res = await axiosLink.get(`/${value1}/${value2}?data=${value3}`)
            return res.data
        }
    })

    if (isPending) {
        return "loading"
    }
    if(error){
        return `An error ${error.message}`
    }
    return[data, refetch]
};

export default useFetch1;