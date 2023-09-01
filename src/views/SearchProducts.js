

import List from "../components/List";
import { useState, useEffect } from "react";
import { Circles } from "react-loader-spinner";


const api = 'https://dummyjson.com/products/search?q=';
function SearchProducts() {
    const [search, setSearch] = useState("");
    const [data, setData] = useState([]);
    const [loader, setLoader] = useState(false)
    const [error, setError] = useState("")
    const handleSearch = (e) => {
        setSearch(e.target.value)
    }
    const fetchOneData = async (product) => {
        try {
            setError("")
            const response = await fetch(`${api}${product}`)
            if (!response.ok) throw new Error("something happen")
            const data = await response.json();
            setData(data.products)
            console.log(data.products)
            setError("")
        } catch (err) {
            setError(err.message)
        }
    }
    const searchButton = () => {
        fetchOneData(search)
    }


    return (
        <div className="container ">
            <h1>Search Products</h1>

            <div>
                <input className="form-control" placeholder="find any products" onChange={handleSearch} value={search} />
                <button onClick={searchButton} className="btn btn-success  mt-3 fw-bold">search</button>
            </div>

            <div>
                {loader && <h2>Find product......</h2>}

                {!loader && <List list={ data} />}
            </div>
        </div>
    )
}

export default SearchProducts;