import { Link, NavLink } from "react-router-dom";
import Container from "../../../Components/Container/Container";
import { useState } from "react";


const Navbar = () => {

    const [toggle, setToggle] = useState(false)

    const activeStyle = "text-blue-800 text-xl font-bold mr-4"
    const normalStyle = "text-black text-xl font-bold mr-4"

    const navLinks = <>
        <NavLink
            to="/"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? activeStyle : normalStyle
            }
        >
            Home
        </NavLink>

        <NavLink
            to="/cart"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? activeStyle : normalStyle
            }
        >
            Cart
        </NavLink>
    </>

    const handleToggle = () => {
        console.log(toggle);
    }

    return (
        <Container>
            <div className="navbar bg-base-100 py-4">
                <div className="navbar-start">
                    <div className="dropdown relative">
                        <div onClick={() => handleToggle(setToggle(!toggle))} tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            {toggle ? 
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                             : 
                             <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>}
                        </div>
                        <ul tabIndex={0} className={toggle ? "menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52" : "absolute -top-20"} >
                            {
                                navLinks
                            }
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">Innovation</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {
                            navLinks
                        }
                    </ul>
                </div>
                <div className="navbar-end">
                    <Link to="/login">
                        <button className="btn">Login</button>
                    </Link>
                </div>
            </div>
        </Container>
    );
};

export default Navbar;