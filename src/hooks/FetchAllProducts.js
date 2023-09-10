import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const FetchAllProducts = ()=> {
    const api = 'https://dummyjson.com/products?limit=100';
    return useQuery({
        queryKey: ['products'],
        queryFn: () => axios.get(api),
    })
}

export default FetchAllProducts;