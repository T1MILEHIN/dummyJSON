import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Loader from "../components/Loader";
import { motion } from "framer-motion";

const Todos = ()=> {
    const {data:todos, error, isLoading} = useQuery({
        queryKey: ["todos"],
        queryFn: ()=> axios.get("https://dummyjson.com/todos")
    })
    if (isLoading) return  <Loader/>
    if (error) return  <motion.p initial={{y:'-40px', opacity:0}} animate={{y:0, opacity:1}} className="min-h-screen flex justify-center items-center text-xl md:text-3xl font-bold text-red-500">{error.message}</motion.p>

    return (
        <div className="md:w-[700px] w-[95%] mx-auto leading-6 border-black border-2 px-2">
            <h1 className="text-center text-2xl md:text-5xl font-black">TODO</h1>
            {todos?.data?.todos.map((todo, index)=>(
                <div key={index} className="flex items center gap-3 font-bold">
                    <p>{todo?.id}</p>
                    <p className={`${todo?.completed && "line-through"}`}>{todo?.todo}</p>
                </div>
            ))}
        </div>
    )
}

export default Todos;