import UsersImage from "../components/UsersImage";
import FetchUsers from "../hooks/FetchUsers";
import Loader from "../components/Loader";
import { motion } from "framer-motion";

function Users() {
    const {error, isLoading, data: users} = FetchUsers()
    if (isLoading) return  <Loader/>
    if (error) return <motion.p initial={{y:'-40px', opacity:0}} animate={{y:0, opacity:1}} className="min-h-screen flex justify-center items-center text-xl md:text-3xl font-bold text-red-500">{error.message}</motion.p>

    return (
        <div className="md:p-10 p-2">
            {<UsersImage list={users?.data} />}
        </div>
    )
}

export default Users;