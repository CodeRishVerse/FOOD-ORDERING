import useRestaurantMenu from "../utiles/useRestaurantMenu";
import { useParams } from "react-router";
import MenuSection from "./MenuSection";
import Shimmer from "./Shimmer";

const RestrauntsMenu = () => {
  const { resId } = useParams();
  const { restrauntMenuHeader, restrauntMainMenu } = useRestaurantMenu(resId);
  console.log(resId);

  const {
    name,
    avgRating,
    totalRatingsString,
    costForTwoMessage,
    cuisines,
    areaName,
    minDeliveryTime,
    maxDeliveryTime,
  } = restrauntMenuHeader;

  if (restrauntMainMenu.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="max-w-[700px] mx-auto mt-5 p-6 rounded-2xl shadow-md bg-white font-sans">
      <h2 className="text-2xl font-bold mb-3">{name}</h2>

      <div className="p-4 rounded-xl bg-[#f9f9f9] mb-5">
        <div className="flex items-center gap-2 text-sm mb-1">
          <span className="text-base">⭐ {avgRating} ({totalRatingsString})</span>
          <span className="text-xl leading-none">•</span>
          <span>{costForTwoMessage}</span>
        </div>
        <div className="text-[#d34f0a] underline mr-1">
          <a href="#">{cuisines}</a>
        </div>
        <div className="flex justify-between text-sm mt-2">
          <div>
            <span className="font-bold mr-1">Outlet</span>
            {areaName}
          </div>
          <div>
            {restrauntMenuHeader.sla?.minDeliveryTime}–
            {restrauntMenuHeader.sla?.maxDeliveryTime}mins
          </div>
        </div>
      </div>

      <h3 className="text-lg font-semibold mb-3">Deals for you</h3>

      <div className="flex gap-4 flex-wrap mb-6">
        <div className="flex items-center gap-3 bg-[#fff3f0] p-4 rounded-xl border border-[#ffd7cf] flex-1 min-w-[280px]">
          <div className="text-[10px] font-bold px-2 py-1 bg-[#ff6347] text-white rounded-md">
            DEAL OF DAY
          </div>
          <div>
            <strong className="text-base">Items At ₹75</strong>
            <div className="text-sm text-[#555]">ON SELECT ITEMS</div>
          </div>
        </div>

        <div className="flex items-center gap-3 bg-[#fff6ee] p-4 rounded-xl border border-[#ffcfb6] flex-1 min-w-[280px]">
          <div className="text-[18px] font-bold px-[10px] py-[6px] bg-[#f97316] text-white rounded-md">
            %
          </div>
          <div>
            <strong className="text-base">Flat ₹165 Off</strong>
            <div className="text-sm text-[#555]">USE FLAT165</div>
          </div>
        </div>
      </div>

      <div className="max-w-[760px] mx-auto">
        <h2 className="text-center font-semibold my-4">— MENU —</h2>

        <div className="relative mb-4">
          <input
            type="search"
            placeholder="Search for dishes"
            className="w-full px-4 py-3 pr-10 border border-[#dcdcdc] rounded-md"
          />
          <span className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
            🔍
          </span>
        </div>

        <div className="flex flex-wrap gap-2 mt-5">
          <button className="flex items-center gap-1 px-4 py-2 text-sm border border-[#dcdcdc] rounded-full bg-white hover:bg-[#f5f5f5]">
            <span className="w-[10px] h-[10px] border-[1.5px] border-[#008005] rounded-sm inline-block"></span>
            Veg
          </button>

          <button className="flex items-center gap-1 px-4 py-2 text-sm border border-[#dcdcdc] rounded-full bg-white hover:bg-[#f5f5f5]">
            <span className="w-[10px] h-[10px] border-[1.5px] border-[#d9252c] rounded-sm inline-block"></span>
            Non-Veg
          </button>

          <button className="flex items-center gap-1 px-4 py-2 text-sm border border-[#dcdcdc] rounded-full bg-white hover:bg-[#f5f5f5]">
            <span className="text-sm leading-none">★</span> Bestseller
          </button>

          <button className="flex items-center gap-1 px-4 py-2 text-sm border border-[#dcdcdc] rounded-full bg-white hover:bg-[#f5f5f5]">
            <span className="text-sm leading-none">🥗</span> Guilt-free
          </button>
        </div>
      </div>

      {restrauntMainMenu.map((res, key) => (
        <MenuSection resItems={res} key={res?.card?.info?.id} />
      ))}
    </div>
  );
};

export default RestrauntsMenu;
