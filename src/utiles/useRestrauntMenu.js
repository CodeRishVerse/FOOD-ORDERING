import { useState, useEffect } from "react";


const useRestrautMenu = (resId) => {
    const [restrauntMenuHeader, setrestrauntMenuHeader] = useState([]);
    const [restrauntMainMenu, setrestrauntMainMenu] = useState([]);



    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const reponse = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.6554182&lng=77.16462&restaurantId=${resId}`);
        const data = await reponse.json();
        const resHeadData = data?.data?.cards[2]?.card?.card?.info;
        const MainData = data?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards;
        setrestrauntMainMenu(MainData);
        setrestrauntMenuHeader(resHeadData);


    }
    return { restrauntMainMenu, restrauntMenuHeader };
}



export default useRestrautMenu;