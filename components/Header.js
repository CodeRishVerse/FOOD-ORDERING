import { useState } from "react";

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
                <a href="/">Home</a>
                <a href="/restaurants">Restaurants</a>
                <a href="/offers">Offers</a>
                <a href="/help">Help</a>
            </nav>

            <div className="header-actions">
                <button className="login-btn" onClick={() => loginStatus === 'login' ? setloginStatus('logout') : setloginStatus('login')}>{loginStatus}</button>
                <button className="signup-btn">Sign Up</button>
            </div>
        </header>
    );


}

export default SwiggyHeader;