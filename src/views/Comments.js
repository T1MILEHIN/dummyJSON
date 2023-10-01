import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Loader from "../components/Loader";
import { motion } from "framer-motion";

const Comments = ()=> {
    const {data, error, isLoading} = useQuery({
        queryKey: ['comments'],
        queryFn: ()=> axios.get("https://dummyjson.com/comments")
    })

    if (error) return  <motion.p initial={{y:'-40px', opacity:0}} animate={{y:0, opacity:1}} className="min-h-screen flex justify-center items-center text-xl md:text-3xl font-bold text-red-500">{error.message}</motion.p>
    if (isLoading) return  <Loader />

    return (
        <>
            <h1 className="font-bold text-center text-5xl">COMMENTS</h1>
            <div className="grid md:grid-cols-4 grid-cols-1 gap-5 lg:px-10 p-2">
                {data?.data?.comments.map((comment, index)=> (
                    <div key={index} className="border-2 border-black p-2 rounded-lg">
                        <h5 className="font-black">@{comment?.user?.username}</h5>
                        <p className="">{comment?.body}</p>
                    </div>
                ))}
            </div>
        </>

    )
}

export default Comments;