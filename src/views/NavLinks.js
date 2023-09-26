import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import {FaBars} from "react-icons/fa"

function NavLinks() {
    const [nav, setNav] = useState(false)
    const toggleNav = ()=> {
        setNav(prev=> !prev)
    }
    return (
        <div className="relative">
            <nav className={`${nav ? "left-0" : "left-[-100%]"} md:fixed z-10 md:left-0 bg-white duration-300 absolute w-full md:flex md:flex-row text-center flex-col justify-around md:p-10 md:py-4 p-2 border-b-2`}>
                <NavLink className={({isActive})=> isActive ? "text-red-500 font-bold no-underline block w-full" : "no-underline block w-full font-bold"} to={`/`}>Home</NavLink>
                <NavLink className={({isActive})=> isActive ? "text-red-500 font-bold no-underline block w-full" : "no-underline block w-full font-bold"} to="searchproducts">Search Products</NavLink>
                <NavLink className={({isActive})=> isActive ? "text-red-500 font-bold no-underline block w-full" : "no-underline block w-full font-bold"} to="categories">Categories</NavLink>
                <NavLink className={({isActive})=> isActive ? "text-red-500 font-bold no-underline block w-full" : "no-underline block w-full font-bold"} to="users">Users</NavLink>
                <NavLink className={({isActive})=> isActive ? "text-red-500 font-bold no-underline block w-full" : "no-underline block w-full font-bold"} to="search">Search for Users</NavLink>
                <NavLink className={({isActive})=> isActive ? "text-red-500 font-bold no-underline block w-full" : "no-underline block w-full font-bold"} to="comments">Commentss</NavLink>
                <NavLink className={({isActive})=> isActive ? "text-red-500 font-bold no-underline block w-full" : "no-underline block w-full font-bold"} to="todos">Get ALL Todos</NavLink>
                <NavLink className={({isActive})=> isActive ? "text-red-500 font-bold no-underline block w-full" : "no-underline block w-full font-bold"} to="studentform">Student Form</NavLink>
                <div className="md:hidden absolute top-0 right-2 font-bold text-3xl cursor-pointer" onClick={()=> setNav(false)}>x</div>
            </nav>
            <FaBars size={50} className={`p-2 md:hidden ml-auto`} onClick={toggleNav} />
            <div className="md:pt-20 pt-5">
                <Outlet />
            </div>
        </div>
    )
}

export default NavLinks;