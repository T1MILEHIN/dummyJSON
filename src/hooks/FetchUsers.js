import axios from "axios";
import { useQuery } from "@tanstack/react-query";


const FetchUsers = ()=> {
    return useQuery({
        queryKey: ["users"],
        queryFn: ()=> axios.get("https://dummyjson.com/users")
    })
}
export default FetchUsers;