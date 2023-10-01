import { useQuery } from "@tanstack/react-query";
import List from "../components/List";
import { useState } from "react";
import axios from "axios";
import Loader from "../components/Loader";
import { motion, AnimatePresence } from "framer-motion"

const api = 'https://dummyjson.com/products/search?q=';
function SearchProducts() {
    const [search, setSearch] = useState("");
    const handleSearch = (e) => {
        setSearch(e.target.value)
    }
    const {data: searchedProduct, error, isLoading} = useQuery({
        queryKey:["searched-product", search],
        queryFn: ({queryKey})=> {
            if (!queryKey[1]) return null
            return axios.get(`${api}${queryKey[1]}`) 
        },
    })
    return (
        <div className="container mx-auto min-h-screen">
            <h1 className="text-center md:text-5xl font-black">Search Products</h1>
            <div className="px-2">
                <input className="border-2 border-black w-full mx-auto h-10 md:h-14 gont-bold text-lg md:text-2xl pl-3 font-bold" placeholder="Find any products" onChange={handleSearch} value={search} />
            </div>
            <AnimatePresence>
                {searchedProduct?.data?.products.length > 0 ? <motion.p initial={{y:'-100px', opacity:0}} animate={{y:0, opacity:1}} exit={{y:'50px', opacity:0}} className="text-center my-2 font-bold text-lg">{searchedProduct?.data?.products.length} item{searchedProduct?.data?.products.length > 1 && "s"} Found</motion.p> : searchedProduct?.data?.products && <motion.p initial={{y:'-100px', opacity:0}} animate={{y:0, opacity:1}} exit={{y:'50px', opacity:0}} className="text-center my-2 font-bold text-lg">No Product Found</motion.p>}
            </AnimatePresence>
            <div>
                {isLoading ? <Loader /> : <List list={searchedProduct?.data?.products} />}
                {error && <motion.p initial={{y:'-40px', opacity:0}} animate={{y:0, opacity:1}} className="min-h-screen flex justify-center items-center text-xl md:text-3xl font-bold text-red-500">{error.message}</motion.p>}
            </div>
        </div>
    )
}

export default SearchProducts;