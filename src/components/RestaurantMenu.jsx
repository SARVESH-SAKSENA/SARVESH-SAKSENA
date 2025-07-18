import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {

  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

;
  // console.log(resId);

  if (resInfo == null) return <Shimmer />;

  console.log(resInfo);

  const  item  =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  const  detail  = resInfo?.cards[2]?.card?.card?.info;  

  console.log(item);
  console.log(detail);
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
