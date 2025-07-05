import { img_Menu } from "../constants/images_url";
const MenuSection = ({ resItems }) => {
  const { name, price, rating, ratingCountV2, description, imageId, finalPrice } = resItems?.card?.info;
  return (
    <div className="menu-section">
      <h3 className="menu-header">(20)</h3>


      <div className="dish-card">

        {/* ---------- Left Section ---------- */}
        <div className="dish-info">
          <div className="dish-tags">
            <span className="diet-icon" />
            {<span className="bestseller">★ Bestseller</span>}
          </div>

          <h4 className="dish-name">
            {name} <span className="dish-size"></span>
          </h4>

          <div className="dish-price">
            {/* {dish.oldPrice && <del>₹{dish.oldPrice}</del>} */}
            <span className="current">₹{Number((price) / 100 || (finalPrice / 100))}</span>
            <span className="tag-icon">🏷️</span>
          </div>

          <div className="dish-rating">★ {resItems?.card?.info?.ratings?.aggregatedRating?.rating} ({resItems?.card?.info?.ratings?.aggregatedRating?.ratingCountV2} ) </div>

          <p className="dish-desc">
            {description}
          </p>
        </div>

        {/* ---------- Right Section ---------- */}
        <div className="dish-cta">
          <img src={img_Menu + imageId} />
          <button className="add-btn">ADD</button>
          {/* {dish.customisable && <span className="customisable">Customisable</span>} */}
        </div>
      </div>


    </div>
  )
}

export default MenuSection;