import { Link, Outlet } from "react-router-dom";


function NavLinks() {
    return (
        <div>
            <nav className="nav flex-column">
                <Link className="nav-link" href="#">Home</Link>
                <Link className="nav-link"  to="searchproducts">Search Products</Link>
                <Link className="nav-link" to="categories">Categories</Link>
                <Link className="nav-link" to="users">Users</Link>
                <Link className="nav-link">Search for Users</Link>
                <Link className="nav-link">Commentss</Link>
                <Link className="nav-link">Get ALL Todos</Link>
            </nav>
            <hr/>
            <div className="container ">
                <Outlet />
            </div>
        </div>
    )
}

export default NavLinks;