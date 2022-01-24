import React from "react";
import {FiSearch,FiShare2} from "react-icons/fi"
const NavSm = () =>{
    return (
        <>
            <div className="text-white flex items-center justify-between">
                <div>
                    <h3 className="font-[Times New Roman] text-xl font-bold leading-30">It All Starts Here!</h3>
                </div>
                <div className="h-5 w-5">
                    <FiShare2 className="h-full w-full"/>
                </div>
            </div>
        </>
    )
}
const NavLg = () =>{
    return(
        <>
            <div className="h-14 flex">
                <img className="h-full w-80 ml-20" alt="img" src="https://images.newindianexpress.com/uploads/user/imagelibrary/2021/4/21/w900X450/logo-on-gray.jpg?w=400&dpr=2.6"/>
                <div className="w-full bg-white gap-3 flex items-center px-3 py-2 w-90 rounded-md ml-5">
                    <FiSearch/>
                    <input type="search" placeholder="Search for Movies, Events, Plays, Sports and Activities"/>
                </div>
                <button class="bg-red-500 text-white  px-7 gap-10 rounded ml-20">Signin</button>
                
            </div>
            

        </>
    )
}
const MovieNav = () =>{
    return(
        <>
            <nav className="px-5 py-2">
                <div className="md:hidden">
                    <NavSm/>
                </div>
                <div className="hidden md:flex lg:hidden">
                    <NavSm/>
                </div>
                <div className="hidden lg:flex">
                    <NavLg/>
                </div>
            </nav>
        </>
    )
}
export default MovieNav;
