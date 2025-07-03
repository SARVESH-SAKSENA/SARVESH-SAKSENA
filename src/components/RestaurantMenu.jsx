import { useEffect, useState } from "react";
import { MENU_URL1, MENU_URL2 } from "../utils/constant";
import { useParams } from "react-router";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const [item, setitem] = useState([]);

  const [detail, setdetail] = useState(null);

  const { resId } = useParams();
  // console.log(resId);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(MENU_URL1 + resId + MENU_URL2);
    const json = await data.json();
    console.log(json);
    setitem(
      json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
        ?.card
    );
    setdetail(json?.data?.cards[2]?.card?.card?.info);
  };

  if (detail == null) return <Shimmer />;

  console.log(item);
  return (
    <div className="res-menu">
      <h1>{detail.name}</h1>
      <h3>{detail.city}</h3>
      <ul>
        {item.carousel.map((item) => (
          <li key={item.bannerId}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
