import { useLoaderData, use } from "react-router-dom";
import axios from "axios";
import SingleProductDisplay from "../components/SingleProductDisplay";

const SingleProduct = ()=> {
    const {data} = useLoaderData()
    return (
        <div className="px-7 py-2">
            <SingleProductDisplay key={data.id} {...data} />
        </div>
    )
}

export async function SingleProductLoader({params}){
    return axios.get(`https://dummyjson.com/products/${params.productId}`);
}

export default SingleProduct;