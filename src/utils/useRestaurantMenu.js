import { useEffect, useState } from "react";
import { MENU_URL1, MENU_URL2 } from "../utils/constant";

const useRestaurantMenu = (props) => {

    const resId = props;

    // console.log(resId);

    const [resInfo , setresInfo ] = useState(null); 
    
    useEffect(() => {
        fetchData();
    } , []);



    const fetchData = async () => {
        const data = await fetch(MENU_URL1 + resId + MENU_URL2);
        const json = await data.json();
        setresInfo(json?.data);
        // console.log(json);
    }

    return resInfo;

}

export default useRestaurantMenu;