const RestrauntsMenu = () => {
    return (

        <div className="dominos-card">
            <h2 className="title">Domino's Pizza</h2>

            <div className="info-box">
                <div className="rating-price">
                    <span className="rating">⭐ 4.4 (19K+ ratings)</span>
                    <span className="dot">•</span>
                    <span className="price">₹400 for two</span>
                </div>
                <div className="cuisine">
                    <a href="#">Pizzas</a>, <a href="#">Italian</a>
                </div>
                <div className="outlet-time">
                    <div className="outlet">
                        <span className="label">Outlet</span> East Patel Nagar
                    </div>
                    <div className="time">20–25 mins</div>
                </div>
            </div>

            <h3 className="deals-heading">Deals for you</h3>

            <div className="deals-container">
                <div className="deal-box">
                    <div className="badge">DEAL OF DAY</div>
                    <div className="deal-text">
                        <strong>Items At ₹75</strong>
                        <div>ON SELECT ITEMS</div>
                    </div>
                </div>

                <div className="deal-box orange">
                    <div className="badge percent">%</div>
                    <div className="deal-text">
                        <strong>Flat ₹165 Off</strong>
                        <div>USE FLAT165</div>
                    </div>
                </div>
            </div>


            <h2>Dishes</h2>


        </div>


    )
}

export default RestrauntsMenu;