import { useEffect,useState } from "react";
const useHomeDisplay = () =>
{
  const [listOfRestraunts, setlistofRestraunts] = useState([]);
  const [listOfRestrauntsC, setList] = useState([]);
  const [searchText, setSearchText] = useState("");

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
  return {listOfRestraunts,
  listOfRestrauntsC,
  searchText};
}

export default useHomeDisplay;