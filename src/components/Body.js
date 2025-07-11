import useHomeDisplay from "../utiles/useHomeDisplay";
import useStatusOnline from "../utiles/useStatusOnline";
import ResCard from "./ResCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router";


const Body = () => {

  const {listOfRestraunts,listOfRestrauntsC,searchText} = useHomeDisplay();
  const onlineState = useStatusOnline();
  if(onlineState===false)
  {
    return <div>
      <h1>Opps you're offline now</h1>
    </div>
  }
  else
  {
  return (
    <>

      <div className="search-container">
        <input
          type="text"
          placeholder="Search restaurants..."
          className="search-input"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button className="search-button" onClick={() => {
          const searchFilter = listOfRestrauntsC.filter((res) => res?.info?.name?.toLowerCase().includes(searchText.toLowerCase()));

          setlistofRestraunts(searchFilter);
        }
        }>Search</button>
      </div>
      <div className="filter-actions">
        <button
          className="top-rated-btn"
          onClick={() => {
            const result = listOfRestrauntsC.filter(
              res => res?.info?.avgRating > 4.2
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


      {listOfRestraunts === null? <Shimmer></Shimmer> : <div className="Res-Container">
        {listOfRestraunts.map((res, key) => {
          return <Link key={res.info.id} to={"restraunts/" + res?.info?.id}><ResCard resList={res}></ResCard></Link>

        })}

      </div>

      }
    </>

  );
}

}

export default Body;