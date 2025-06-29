const ResCard = ({ resList }) => {
    const { cloudinaryImageId, name, cuisines, avgRating, sla, deliveryTime } = resList?.info;

    return (
        <div className="restaurant-card">
            <img className="restaurant-image" src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`} alt="error" />
            <div className="restaurant-info">
                <h3 className="restaurant-name">{name}</h3>
                <p className="restaurant-cuisine">{cuisines.join(',')}</p>
                <div className="restaurant-details">
                    <span className="restaurant-rating">⭐{avgRating} </span>
                    <span className="restaurant-delivery-time">{sla?.deliveryTime}mins</span>
                </div>
            </div>
        </div>
    );

}

export default ResCard;