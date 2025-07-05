
const AboutUs = () => {
    return (
        <div className="partner-container">
            <div className="hero-section">
                <div className="hero-text">
                    <h3>PARTNER WITH SWIGGY</h3>
                    <h1>Reach customers far away from you</h1>
                </div>
                <div className="get-started-card">
                    <h2>Get Started</h2>
                    <p>Enter a mobile number or restaurant ID to continue</p>
                    <input type="text" placeholder="Enter Restaurant ID / Mobile number" />
                    <button disabled>Continue</button>
                    <small>
                        By logging in, I agree to Swiggy’s <a href="#">terms & conditions</a>
                    </small>
                </div>
            </div>

            <div className="steps-section">
                <div className="steps-box">
                    <h4>In just 3 easy steps</h4>
                    <h2>Get your restaurant delivery-ready in 24hrs!</h2>
                    <ul>
                        <li><strong>STEP 1</strong><br />Install the Swiggy Owner App</li>
                        <li><strong>STEP 2</strong><br />Login/Register using your phone number</li>
                        <li><strong>STEP 3</strong><br />Enter restaurant details</li>
                    </ul>
                </div>

                <div className="docs-box">
                    <h4>For an easy form filling process,</h4>
                    <p>you can keep these documents handy.</p>
                    <ul>
                        <li>FSSAI License copy <a href="#">Apply Here</a></li>
                        <li>Your Restaurant menu</li>
                        <li>Bank details</li>
                        <li>GSTIN <a href="#">Apply Here</a></li>
                        <li>PAN card copy</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default AboutUs;