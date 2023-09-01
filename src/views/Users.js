import  List  from "../components/List";
import { useState, useEffect } from "react";
import { Circles } from "react-loader-spinner";
import UsersImage from "../components/UsersImage";


const api = 'https://dummyjson.com/users';
function Users() {
    const [data, setData] = useState([]);
    const [loader, setLoader] = useState(false)
    const [error, setError] = useState("")
    const fetchproducts = async () => {
        try {
            setError("")
            setLoader(true)  //loading will start from here 
            const resposne = await fetch(api)
            if (!resposne.ok) {
                throw new Error("something happened")
            }
            const data = await resposne.json()
            setData(data.users)
            setLoader(false)  // remove the true 
            setError("")
            console.log(data.users)
        } catch (err) {
            console.log(err.message)
            setError(err.message) /// set the error state 
        }
    }
    useEffect(() => {
        fetchproducts()
    }, []);
    return (
        <div className="container ">   
            {loader && <h2>Loading users.......</h2>}
            {!loader &&   <UsersImage list={data} />}
        </div>
    )
}

export default Users;