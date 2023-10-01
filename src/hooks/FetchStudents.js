import { useQuery } from "@tanstack/react-query"
import axios from "axios"

const FetchStudents = ()=> {
    const url = "https://studentdb-c9874-default-rtdb.firebaseio.com/students.json";
    return useQuery({
        queryKey: ["students"],
        queryFn: ()=> axios.get(url)
    })
}


export default FetchStudents;