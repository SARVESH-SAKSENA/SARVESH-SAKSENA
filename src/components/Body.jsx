import { API_URL } from "../utils/constant";
import resList from "../utils/mockdata";
import Rescard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  const [Listofres, setListofres] = useState([]);

  const [list , setList] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const [search, setSearch] = useState("");

  const fetchData = async () => {
    const data = await fetch(API_URL);
    const json = await data.json();
    console.log(json);
    setListofres(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setList(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  if (list.length == 0) return <Shimmer />;

  return (
    <div>
      <div className="search">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
          <button
            onClick={() => {
              console.log(search);
              const filteredList = Listofres.filter((res) =>
                res.info.name.toLowerCase().includes(search.toLowerCase())
              );
              setList(filteredList);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="btn"
          onClick={() => {
            setListofres(
              Listofres.filter((restaurant) => restaurant.info.avgRating > 4.0)
            );
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {list.map((restaurant) => (
          <Rescard key={restaurant.info.id} resData={restaurant.info} />
        ))}
      </div>
    </div>
  );
};

export default Body;
