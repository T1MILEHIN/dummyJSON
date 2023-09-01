import { Link } from "react-router-dom";





function CategoriesList({categories}) {
    return ( 
        <div className="container">

            {categories.map((item, index) => {
                return ( 
                    <div key={index}>
                        <Link className="pt-3" to={item}>{item}</Link >
                    </div>
                )
            })}

        </div>
    )
}

export default CategoriesList;