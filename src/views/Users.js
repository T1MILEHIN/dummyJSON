import UsersImage from "../components/UsersImage";
import FetchUsers from "../hooks/FetchUsers";
import Loader from "../components/Loader";

function Users() {
    const {error, isLoading, data: users} = FetchUsers()
    if (isLoading) return  <Loader/>
    if (error) return  <p className="text-center text-xl md:text-3xl font-bold text-red-500">{error.message}</p>

    return (
        <div className="md:p-10 p-2">
            {<UsersImage list={users?.data} />}
        </div>
    )
}

export default Users;