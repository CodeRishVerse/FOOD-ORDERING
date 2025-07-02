const MenuSection = ({resItems}) =>
{
    console.log(resItems);
    const {title,name} = resItems?.cards[1]?.card?.card;
    return (
        <div className="menu-section">
            <h3 className="menu-header">{title}(20)</h3>
            
    <div className="dish-card">

      {/* ---------- Left Section ---------- */}
      <div className="dish-info">
        <div className="dish-tags">
          <span className="diet-icon" />
          { <span className="bestseller">★ Bestseller</span>}
        </div>

        <h4 className="dish-name">
          {name} <span className="dish-size">({dish.size})</span>
        </h4>

        <div className="dish-price">
          {/* {dish.oldPrice && <del>₹{dish.oldPrice}</del>} */}
          {/* <span className="current">₹{dish.price}</span> */}
          <span className="tag-icon">🏷️</span>
        </div>

        {/* <div className="dish-rating">★ {dish.rating} ({dish.ratingCount})</div> */}

        <p className="dish-desc">
          {/* {dish.desc} <span className="more">… more</span> */}
        </p>
      </div>

      {/* ---------- Right Section ---------- */}
      <div className="dish-cta">
        {/* <img src={dish.imgUrl} alt={dish.name} /> */}
        <button className="add-btn">ADD</button>
        {/* {dish.customisable && <span className="customisable">Customisable</span>} */}
      </div>
    </div>
        </div>  
    )
}

export default MenuSection;