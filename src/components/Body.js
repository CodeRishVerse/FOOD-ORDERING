import useHomeDisplay from "../utiles/useHomeDisplay";
import useStatusOnline from "../utiles/useStatusOnline";
import ResCard from "./ResCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router";

const Body = () => {
  const { listOfRestraunts, listOfRestrauntsC, searchText, setSearchText, setlistofRestraunts } = useHomeDisplay();
  const onlineState = useStatusOnline();

  if (onlineState === false) {
    return (
      <div className="text-center mt-10">
        <h1 className="text-xl font-semibold text-gray-700">Oops! You're offline now</h1>
      </div>
    );
  } else {
    return (
      <>
        <div className="flex justify-center max-w-xl mx-auto mt-6 rounded-md overflow-hidden shadow-md">
          <input
            type="text"
            placeholder="Search restaurants..."
            className="flex-1 px-4 py-2 text-base outline-none placeholder-gray-500"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            className="bg-[#fc8019] text-white px-5 text-base font-semibold hover:bg-[#e67300] transition-colors"
            onClick={() => {
              const searchFilter = listOfRestrauntsC.filter((res) =>
                res?.info?.name?.toLowerCase().includes(searchText.toLowerCase())
              );
              setlistofRestraunts(searchFilter);
            }}
          >
            Search
          </button>
        </div>

        <div className="flex justify-center items-center gap-3 mt-4 mx-auto max-w-xs">
          <button
            className="bg-[#fc8019] text-white px-5 py-2 text-sm font-semibold rounded-md hover:bg-[#e67300] transition-colors"
            onClick={() => {
              const result = listOfRestrauntsC.filter(
                (res) => res?.info?.avgRating > 4.2
              );
              console.log(result);
              setlistofRestraunts(result);
            }}
          >
            Top Rated
          </button>

          <button
            className="px-4 py-2 text-sm font-medium border border-gray-300 rounded hover:bg-gray-100 transition-colors"
            onClick={() => setlistofRestraunts(listOfRestrauntsC)}
          >
            Reset
          </button>
        </div>

        {listOfRestraunts === null ? (
          <Shimmer />
        ) : (
          <div className="flex flex-wrap justify-center gap-4 px-3 mt-6">
            {listOfRestraunts.map((res) => (
              <Link key={res.info.id} to={"restraunts/" + res?.info?.id}>
                <ResCard resList={res}></ResCard>
              </Link>
            ))}
          </div>
        )}
      </>
    );
  }
};

export default Body;
