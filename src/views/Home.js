import  List  from "../components/List";
import FetchAllProducts from "../hooks/FetchAllProducts"
import Loader from "../components/Loader";
import { motion } from "framer-motion";

function Home() {
    const { isLoading, error, data: products } = FetchAllProducts()
    
    if (isLoading) return <Loader />
    if (error) return  <motion.p initial={{y:'-40px', opacity:0}} animate={{y:0, opacity:1}} className="min-h-screen flex justify-center items-center text-xl md:text-3xl font-bold text-red-500">{error.message}</motion.p>
    
    return (
        <div className="">   
            <List list={products?.data.products} />
        </div>
    )
}

export default Home;