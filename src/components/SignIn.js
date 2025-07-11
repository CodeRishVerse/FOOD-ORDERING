
;
const LoginIn = () => {
    return (
        <div className="login-container">
            <div className="login-box">
                <button className="close-button">✕</button>
                <h1>Login</h1>
                <p>
                    or <span className="create-account">create an account</span>
                </p>
                <div className="login-image">
                    <img
                        src="https://cdn-icons-png.flaticon.com/512/5787/5787074.png"
                        alt="wrap"
                    />
                </div>
                <input
                    type="tel"
                    className="phone-input"
                    placeholder="Phone number"
                />
                <button className="login-Form-Btn">LOGIN</button>
                <p className="terms-text">
                    By clicking on Login, I accept the{' '}
                    <span className="link">Terms & Conditions</span> &{' '}
                    <span className="link">Privacy Policy</span>
                </p>
            </div>
        </div>
    )
}

export default LoginIn;