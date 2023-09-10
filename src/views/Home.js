import  List  from "../components/List";
import FetchAllProducts from "../hooks/FetchAllProducts"
import Loader from "../components/Loader";

function Home() {
    const { isLoading, error, data: products } = FetchAllProducts()
    
    if (isLoading) return <Loader />
    if (error) return <p className="text-center text-xl md:text-3xl font-bold text-red-500">{error.message}</p>
    
    return (
        <div className="">   
            <List list={products?.data.products} />
        </div>
    )
}

export default Home;