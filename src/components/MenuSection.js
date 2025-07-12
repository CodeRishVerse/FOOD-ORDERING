import { img_Menu } from "../constants/images_url";

const MenuSection = ({ resItems }) => {
  console.log("This is resItems" + resItems);
  const { name, price, rating, ratingCountV2, description, imageId, finalPrice } = resItems?.card?.info;

  return (
    <div className="max-w-[760px] mx-auto">
      <h3 className="text-center font-semibold my-4">(20)</h3>

      <div className="flex justify-between gap-6 py-6 border-b border-[#f0f0f0] font-['Inter'] max-[600px]:flex-col">
        {/* ---------- Left Section ---------- */}
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1 text-sm">
            <span className="w-[0.85rem] h-[0.85rem] border-[1.8px] border-green-800 rounded-sm inline-block"></span>
            <span className="text-[#ff5b5b] font-semibold">★ Bestseller</span>
          </div>

          <h4 className="text-[1.35rem] font-semibold leading-[1.3] m-0">
            {name} <span className="font-normal text-[#555]"></span>
          </h4>

          <div className="flex items-center gap-3 my-2 text-[1.15rem]">
            <span className="font-bold text-[#111]">₹{Number((price) / 100 || (finalPrice / 100))}</span>
            <span className="text-[1rem]">🏷️</span>
          </div>

          <div className="text-[0.9rem] text-[#008005] mb-3">
            ★ {resItems?.card?.info?.ratings?.aggregatedRating?.rating} ({resItems?.card?.info?.ratings?.aggregatedRating?.ratingCountV2})
          </div>

          <p className="text-[1rem] leading-[1.55] text-[#555] max-w-[46ch]">
            {description}
          </p>
        </div>

        {/* ---------- Right Section ---------- */}
        <div className="flex flex-col items-center min-w-[160px] gap-2.5 max-[600px]:flex-row max-[600px]:justify-between">
          <img
            src={img_Menu + imageId}
            className="w-[150px] h-[108px] object-cover rounded-lg max-[600px]:w-[120px] max-[600px]:h-[86px]"
          />
          <button className="border-2 border-[#60b246] bg-[#fafcfb] text-[#60b246] font-bold px-11 py-2 rounded-md cursor-pointer hover:bg-[#e8f5e9] transition-colors">
            ADD
          </button>
          {/* Optional: <span className="text-[0.78rem] text-[#777]">Customisable</span> */}
        </div>
      </div>
    </div>
  );
};

export default MenuSection;
