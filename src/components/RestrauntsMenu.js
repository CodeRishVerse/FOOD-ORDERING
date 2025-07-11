import useRestaurantMenu from "../utiles/useRestaurantMenu";
import { useParams } from "react-router";
import MenuSection from "./MenuSection";
import Shimmer from "./Shimmer";



const RestrauntsMenu = () => {


    

 const { resId } = useParams();
  const { restrauntMenuHeader, restrauntMainMenu } = useRestaurantMenu(resId);
 console.log(resId);


   


    // const { restrauntMenuHeader, restrauntMainMenu } = useRestrautMenu(resId);
    // console.log(restrauntMainMenu);



    const { name, avgRating, totalRatingsString, costForTwoMessage, cuisines, areaName, minDeliveryTime,
        maxDeliveryTime } = restrauntMenuHeader;

       if (restrauntMainMenu.length === 0) {
    return <Shimmer />;
  }

    return (

        <div className="dominos-card">
            <h2 className="title">{name}</h2>

            <div className="info-box">
                <div className="rating-price">
                    <span className="rating">⭐ {avgRating} ({totalRatingsString})</span>
                    <span className="dot">•</span>
                    <span className="price">{costForTwoMessage}</span>
                </div>
                <div className="cuisine">
                    <a href="#">{cuisines}</a>
                </div>
                <div className="outlet-time">
                    <div className="outlet">
                        <span className="label">Outlet</span>{areaName}
                    </div>
                    <div className="time">{restrauntMenuHeader.sla?.minDeliveryTime}–{restrauntMenuHeader.sla?.maxDeliveryTime}mins</div>
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

            <div className="menu-wrapper">

                {/* menu divider */}
                <h2 className="menu-title">— MENU —</h2>

                {/* search box */}
                <div className="dish-search">
                    <input type="search" placeholder="Search for dishes" />
                    <span className="search-icon">🔍</span>
                </div>

                {/* filter pills */}
                <div className="dish-filters">
                    <button className="pill"><span className="dot veg" /> Veg</button>
                    <button className="pill"><span className="dot non-veg" /> Non-Veg</button>
                    <button className="pill"><span className="star">★</span> Bestseller</button>
                    <button className="pill"><span className="leaf">🥗</span> Guilt-free</button>
                </div>



            </div>
            
        
       

        {restrauntMainMenu.map((res,key)=>
        {
           return  <MenuSection resItems={res} key={res?.card?.info?.id}></MenuSection>;
        })}



        </div>






    )
}

export default RestrauntsMenu;