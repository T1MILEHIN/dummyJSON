import { useState, useEffect } from "react";
import CategoriesList from "../components/CategoriesList";
import { Outlet } from "react-router-dom";

const api = 'https://dummyjson.com/products/categories';
function Categories() {
    const [data, setData] = useState([]);
    const [loader, setLoader] = useState(false)
    const [error, setError] = useState("")
    const fetchproducts = async () => {
        try {
            setError("")
            setLoader(true)  //loading will start from here 
            const response = await fetch(api)
            if (!response || !response.ok) {
                throw new Error("something happened")
            }
            console.log(response)
            const data = await response.json()
            setData(data)
            setLoader(false)  // remove the true 
            setError("")
        } catch (err) {
            setError(err.message) /// set the error state 
        }
        finally {
            setLoader(false)
        }
    }
    useEffect(() => {
        fetchproducts()
    }, []);
    return (
        <div className="container mx-auto grid md:grid-cols-6 grid-cols-1 gap-10 items-start">   
            <div className="col-span-6 md:col-span-1">
                {loader && <h2 className="text-center">Loading categories...</h2>}
                {!loader && <CategoriesList categories={data} />}
                {error && <p className="text-red-500 font-bold text-center mx-auto">{error}</p>}
            </div>
            <div className="md:col-span-5 col-span-6">
                {!loader && <Outlet />}
                {error && <p className="text-red-500 font-bold text-center mx-auto">{error}</p>}
            </div>
        </div>
    )
}

export default Categories;