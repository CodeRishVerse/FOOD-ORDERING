import { useState, useEffect } from "react";
import { Link } from "react-router";
import useStatusOnline  from "../utiles/useStatusOnline";

const SwiggyHeader = () => {
    const onlineState = useStatusOnline();

    return (
        <header className="flex items-center justify-between px-6 py-3 bg-[#fc8019] text-white font-sans">
            <div className="flex-shrink-0">
                <img
                    src="https://1000logos.net/wp-content/uploads/2021/05/Swiggy-logo.jpg"
                    alt="Swiggy Logo"
                    className="w-20 h-10 object-contain"
                />
            </div>

            <nav>
                <ol className="flex items-center gap-10 ml-32 list-none">
                    <li> <Link to="/" className="text-white no-underline font-semibold text-base hover:underline">Home</Link></li>
                    <li> <Link to="/AboutUs" className="text-white no-underline font-semibold text-base hover:underline">About Us</Link></li>
                    <li> <Link to="/contact" className="text-white no-underline font-semibold text-base hover:underline">Contact Me</Link> </li>
                    <li>
                        <div
                            className="w-3 h-3 rounded-full"
                            style={{ backgroundColor: onlineState ? "green" : "red" }}
                        ></div>
                    </li>
                    <li> <Link to="/Grocery" className="text-white no-underline font-semibold text-base hover:underline">Grocery</Link></li>
                </ol>
            </nav>

            <div className="flex items-center">
                <Link to="/signin">
                    <button className="bg-transparent border-2 border-white text-white px-4 py-1.5 ml-3 rounded font-semibold text-sm hover:bg-white/20 transition-all duration-300">
                        Login
                    </button>
                </Link>
                <button className="ml-3 px-4 py-1.5 bg-white text-[#fc8019] rounded font-semibold text-sm hover:bg-[#e67300] hover:text-white transition-all duration-300">
                    Sign Up
                </button>
            </div>
        </header>
    );
};

export default SwiggyHeader;
