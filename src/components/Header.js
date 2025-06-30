import { useState, useEffect } from "react";
import {Link} from "react-router";


const SwiggyHeader = () => {
    const [loginStatus, setloginStatus] = useState('login');
    
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
                </ol>
               
            
               
            </nav>

            <div className="header-actions">
                <button className="login-btn" onClick={() => loginStatus === 'login' ? setloginStatus('logout') : setloginStatus('login')}>{loginStatus}</button>
                <button className="signup-btn">Sign Up</button>
            </div>
        </header>
    );


}

export default SwiggyHeader;