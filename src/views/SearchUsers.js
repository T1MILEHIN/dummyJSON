import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import SearchedUserCard from "../components/SearchedUser";
import Loader from "../components/Loader";
import { motion, AnimatePresence } from "framer-motion"

const SearchUsers = ()=> {
    const [search, setSearch] = useState("")
    const url = "https://dummyjson.com/users/search?q="
    const handleSearch = (e)=>{
        setSearch(e.target.value)
    }
    const {data:theSearchedUser, error, isLoading} = useQuery({
        queryKey: ["searched-user", search],
        queryFn: ({queryKey})=> {
            if (!queryKey[1]) return null
            return axios.get(`${url}${queryKey[1]}`)
        }
    })
    return (
        <>
            <h1 className="text-center text-xl md:text-5xl font-black">SEARCH USER</h1>
            <div className="container mx-auto">
                <form>
                    <div className="px-2">
                        <input type="text" onChange={handleSearch} value={search} className="border-2 border-black w-full mx-auto h-10 md:h-14 gont-bold text-lg md:text-2xl pl-3 font-bold" placeholder="Search any User"/>
                    </div>
                </form>
                <AnimatePresence>
                    {theSearchedUser?.data?.users.length > 0 ? <motion.p initial={{y:'-100px', opacity:0}} animate={{y:0, opacity:1}} exit={{y:'50px', opacity:0}} className="text-center my-2 font-bold text-xl">{theSearchedUser?.data?.users.length} user{theSearchedUser?.data?.users.length > 1 && "s"} Found</motion.p> : theSearchedUser?.data?.users && <motion.p initial={{y:'-100px', opacity:0}} animate={{y:0, opacity:1}} exit={{y:'50px', opacity:0}} className="text-center my-2 font-bold text-xl">No User Found</motion.p>}
                </AnimatePresence>
                {error && <motion.p initial={{y:'-40px', opacity:0}} animate={{y:0, opacity:1}} className="min-h-screen flex justify-center items-center text-xl md:text-3xl font-bold text-red-500">{error.message}</motion.p>}
                {isLoading && <Loader />}
                <div className="grid md:grid-cols-3 grid-cols-1 gap-10 px-2 md:px-10">
                    {!isLoading && <SearchedUserCard user={theSearchedUser?.data?.users} />}
                </div>
            </div>
        </>
    )
}

export default SearchUsers;