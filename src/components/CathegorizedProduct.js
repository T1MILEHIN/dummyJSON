import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import List from "../components/List"
import axios from "axios";
import Loader from "../components/Loader"

const CategorizedProducts = ()=> {
    const {category} = useParams()
    const url = "https://dummyjson.com/products/category"
    const {error, isLoading, data: categorized, isFetching} = useQuery({
        queryKey: ["categorized-product", category],
        queryFn: ({queryKey})=> axios.get(`${url}/${queryKey[1]}`),
        keepPreviousData: true,
    })

    if (error) return `An Error occued ${error.message}`
    if (isLoading || isFetching) return <h1 className="min-h-[100vh]"><Loader /></h1>
    
    return (
        <>
            <List list={categorized?.data.products}/>
        </>
    )
}

export default CategorizedProducts;