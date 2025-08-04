import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import MenuCategory from "./MenuCategory";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  const [showIndex, setShowIndex] = useState(null);

  // console.log(resId);

  if (resInfo == null) return <Shimmer />;

  // console.log(resInfo);

  const item =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  const detail = resInfo?.cards[2]?.card?.card?.info;

  const category =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (card) =>
        card?.card?.card?.["@type"] ==
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory" ||
        card?.card?.card?.["@type"] ==
          "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory"
    );

  // console.log("item");
  // console.log(item);
  // console.log("Detail");
  // console.log(detail);

  // console.log(resInfo);
  // console.log(category);

  return (
    <div>
      <div className="text-center bg-gray-100 w-6/12 m-auto">
        <h1 className="font-bold text-2xl font-mono">{detail.name}</h1>
        <h3 className="text-lg">{detail.city}</h3>
      </div>
      <div>
        {category.map((c, index) => (
          <MenuCategory
            item={c}
            key={c.card.card.categoryId}
            showItem={index == showIndex ? true : false}
            setShowIndex={() => {
              index == showIndex ? setShowIndex(null) : setShowIndex(index);
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
