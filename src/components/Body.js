import { useEffect, useState } from "react";
import ResCard from "./ResCard";
import Shimmer from "./Shimmer";

const Body = () => {

    const [listOfRestraunts, setlistofRestraunts] = useState([]);
    const [listOfRestrauntsC, setList]= useState([]);
    const [searchText,setSearchText] = useState("");
      console.log(listOfRestrauntsC);
    useEffect(() => {
        fetchData();
    }, []);

    async function fetchData() {
        const response = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6554182&lng=77.16462&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const data = await response.json();
        const restaurants = data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        setlistofRestraunts(restaurants);
        setList(restaurants);

    }

    return  (
     <>
            
            <div className="search-container">
                <input
                    type="text"
                    placeholder="Search restaurants..."
                    className="search-input"
                    value={searchText} 
                   onChange={(e)=>setSearchText(e.target.value)}  
                />
                <button className="search-button" onClick={()=>
                    {
                        const searchFilter = listOfRestrauntsC.filter((res)=>res?.info?.name?.toLowerCase().includes(searchText.toLowerCase()));
                        
                        setlistofRestraunts(searchFilter);
                    }
                }>Search</button>
            </div>
            <div className="filter-actions">
  <button
    className="top-rated-btn"
    onClick={() => {
      const result = listOfRestrauntsC.filter(
        res => res?.info?.avgRating >4.2
      );
      console.log(result);
      setlistofRestraunts(result);
    }}
  >
    Top Rated
  </button>

  <button
    className="reset-btn"
    onClick={() => setlistofRestraunts(listOfRestrauntsC)}
  >
    Reset
  </button>
</div>
    
      
   {listOfRestraunts.length===0?<Shimmer></Shimmer>:<div className="Res-Container">
                {listOfRestraunts.map((res, key) => {
                    return <ResCard resList={res} key={res?.info?.id}></ResCard>

                })}


            </div>}
        </>
    
            );  

}

export default Body;