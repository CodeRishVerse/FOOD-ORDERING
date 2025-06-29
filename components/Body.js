import { useEffect, useState } from "react";
import SwiggyHeader from "./Header"
import ResCard from "./ResCard";
import { useState, useEffect } from "react";

const Body = () => {

    const [listOfRestraunts, setlistofRestraunts] = useState([]);



    useEffect(() => {
        fetchData();
    }, []);

    async function fetchData() {
        const response = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6554182&lng=77.16462&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const data = await response.json();
        const restaurants = data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        console.log(restaurants);
        setlistofRestraunts(restaurants);

    }

    return (
        <>
            <SwiggyHeader></SwiggyHeader>

            <div className="search-container">
                <input
                    type="text"
                    placeholder="Search restaurants..."
                    className="search-input"
                />
                <button className="search-button">Search</button>
            </div>
            <button className="top-rated-btn" >
                Top Rated Restaurants
            </button>
            <div className="Res-Container">
                {listOfRestraunts.map((res, key) => {
                    return <ResCard resList={res} key={res?.info?.id}></ResCard>

                })}


            </div>
        </>
    )
}

export default Body;