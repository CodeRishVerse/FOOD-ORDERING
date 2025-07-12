const ResCard = ({ resList }) => {
    const { cloudinaryImageId, name, cuisines, avgRating, sla, deliveryTime } = resList?.info;

    return (
        <div className="w-[280px] rounded-[10px] shadow-md overflow-hidden bg-white font-sans cursor-pointer transition-transform duration-200 border-2 border-black hover:scale-105">
            <img
                className="w-full h-[160px] object-cover"
                src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`}
                alt="error"
            />
            <div className="px-4 py-3">
                <h3 className="text-[18px] font-bold text-[#2a2a2a] m-0">{name}</h3>
                <p className="text-[14px] text-gray-600 my-1">{cuisines.join(',')}</p>
                <div className="flex justify-between text-[14px] font-semibold text-[#ff7e20]">
                    <span className="bg-[#f6f6f6] px-2 py-1 rounded">⭐{avgRating}</span>
                    <span className="bg-[#f6f6f6] px-2 py-1 rounded">{sla?.deliveryTime}mins</span>
                </div>
            </div>
        </div>
    );
}

export default ResCard;
