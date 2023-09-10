import { NavLink } from "react-router-dom";


function CategoriesList({categories}) {
    return ( 
        <div className="container md:block flex flex-wrap gap-5 p-2">
            {categories.map((item, index) => {
                return ( 
                    <div key={index} className="leading-6 md:block border-2 border-black md:border-none p-1 rounded-md">
                        <NavLink className={({isActive})=> isActive ? "pt-3 uppercase text-red-500 font-black duration-300" : "pt-3 font-bold duration-300"} to={`/categories/${item}`}>{item}</NavLink >
                    </div>
                )
            })}
        </div>
    )
}

export default CategoriesList;