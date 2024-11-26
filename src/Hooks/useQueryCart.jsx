import { useQuery } from "@tanstack/react-query";
import { data } from 'autoprefixer';

//share Logic
function useQueryCart(key,fn) {
    return useQuery({ queryKey: [key], queryFn: fn, select:(data)=>data?.data})
}

export default useQueryCart;