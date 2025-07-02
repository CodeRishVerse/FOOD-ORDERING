import {useState,useEffect} from "react";
import { useParams } from "react-router";
import MenuSection from "./MenuSection";
import { loadRestaurantMenu } from "../constants/apis";

const RestrauntsMenu = () => {
    
const [restrauntMenuHeader,setrestrauntMenuHeader]=useState([]);
const [restrauntMainMenu,setrestrauntMainMenu] = useState([]);
console.log(restrauntMainMenu);
const {resId} = useParams();
console.log(restrauntMenuHeader);
useEffect (()=>
{
fetchData();
},[]);

const fetchData = async () =>
{
   const reponse = await fetch(`${loadRestaurantMenu}${resId}`);
   const data = await reponse.json();
   console.log(data);
   const resHeadData = data?.data?.cards[2]?.card?.card?.info;
   const MainData = data?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR;
   setrestrauntMainMenu(MainData);
   setrestrauntMenuHeader(resHeadData);
}

const {name,avgRating,totalRatingsString,costForTwoMessage,cuisines,areaName,minDeliveryTime,
maxDeliveryTime}=restrauntMenuHeader;



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
     <MenuSection resItems={restrauntMainMenu}></MenuSection>
  
    </div>



     


    )
}

export default RestrauntsMenu;