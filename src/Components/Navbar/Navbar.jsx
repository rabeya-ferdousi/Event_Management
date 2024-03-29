import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaRegUser ,FaSignOutAlt } from "react-icons/fa";
import { AuthContext } from '../../Provider/AuthProvider';


const Navbar = () => {

    const {user,logOut} = useContext(AuthContext);


    const handleSignOutBtn=e=>{
        logOut()
        .then(result=>
            swal({
                title: "Successfully Signed Out",
                icon: "success",
                dangerMode: false,}))
        .catch(error=>
            swal({
                title: "Error",
                icon: "warning",
                dangerMode: true,}))
    }

    const navlinks = 
    <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/login">Login</NavLink></li>
        <li><NavLink to="/register">Registration</NavLink></li>
        <li><NavLink to="/services">Services</NavLink></li>
    </>
    return (
        <div>
            

            <div className="navbar bg-[#14b8a6]">
            <div className="navbar-start">
                <div className="dropdown">
                <label tabIndex={0} className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="white"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-black font-semibold">{navlinks}</ul>
                </div>
                {/* <FaBirthdayCake className='text-white'></FaBirthdayCake> */}
                <a className="p-2 font-bold normal-case text-xl text-white">Let's Celebrate</a>
            </div>
            <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 text-white font-semibold">{navlinks}</ul>
            </div>
            <div className="hidden lg:flex navbar-end">
            
             
            {
               user && <>
                        <FaRegUser className='text-white'></FaRegUser>
                          <Link to="/profile" className='text-white'>{user.email}</Link>
                        </>
            }
            {
                user && 
                <a onClick={handleSignOutBtn} className="btn btn-ghost text-white"><FaSignOutAlt className='text-white'></FaSignOutAlt>Sign-Out</a>
            }
            </div>
            </div>

        </div>
    );
};

export default Navbar;