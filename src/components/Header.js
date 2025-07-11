import { useState, useEffect } from "react";
import { Link } from "react-router";
import useStatusOnline  from "../utiles/useStatusOnline";


const SwiggyHeader = () => {

    const onlineState = useStatusOnline();
    return (
        <header className="swiggy-header">
            <div className="logo">
                <img
                    src="https://1000logos.net/wp-content/uploads/2021/05/Swiggy-logo.jpg"
                    alt="Swiggy Logo"
                />
            </div>

            <nav className="nav-links">
                <ol className="list-Items">
                    <li> <Link to="/">Home</Link></li>
                    <li> <Link to="/AboutUs">About Us</Link></li>
                    <li> <Link to="/contact">Contact Me</Link> </li>
                    <li>
                        <div
                            className="status-circle" 
                            style={{
      backgroundColor: onlineState ? "green" : "red"
    }}>
                        
                            
                        </div>
                    </li>
                    <li><Link to="/Grocery">Grocery</Link></li>
                </ol>



            </nav>

            <div className="header-actions">
                <Link to="/signin"> <button className="login-btn">Login</button></Link>
                <button className="signup-btn">Sign Up</button>
            </div>
        </header>
    );


}

export default SwiggyHeader;