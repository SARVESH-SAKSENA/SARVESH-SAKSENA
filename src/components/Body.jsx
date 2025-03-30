import resList from "../utils/mockdata";
import Rescard from "./RestaurantCard";
import { useState } from "react";

const Body = () => {
    let [Listofres , setListofres] = useState(resList);
  return (
    <div>
      <div className="search">
        <button className="btn" onClick={()=>{
            Listofres = Listofres.filter((restaurant)=>(restaurant.info.avgRating>=4.0))
            console.log(Listofres);
        }}>Top Rated Restaurants</button>
      </div>
      <div className="res-container">
        {Listofres.map((restaurant) => (
          <Rescard key={restaurant.info.id} resData={restaurant.info} />
        ))}
      </div>
    </div>
  );
};


export default Body;