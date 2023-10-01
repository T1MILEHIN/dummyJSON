import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const FetchSingleStudent = (key)=> {
    const url = "https://studentdb-c9874-default-rtdb.firebaseio.com/students/"
    return useQuery({
        queryKey: ["student", key],
        queryFn: ({queryKey})=> axios.get(`${url}${queryKey[1]}.json`)
    })
}

export default FetchSingleStudent;