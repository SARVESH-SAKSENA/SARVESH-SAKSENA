import { API_URL } from "../utils/constant";
import resList from "../utils/mockdata";
import Rescard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router";

const Body = () => {
  const [Listofres, setListofres] = useState([]);

  const [list, setList] = useState([]);

  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    searchfeed();
  }, [search]);

  const searchfeed = () => {
    const filteredList = Listofres.filter((res) =>
      res.info.name.toLowerCase().includes(search.toLowerCase())
    );
    setList(filteredList);
  };





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
        <div className="search-text">
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
              searchfeed();              
            }}
          >
            Search
          </button>
        </div>
        <button
          className="btn"
          onClick={() => {
            setList(
              Listofres.filter((restaurant) => restaurant.info.avgRating > 4.3)
            );
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {list.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"restaurants/" + restaurant.info.id}
          >
            <Rescard resData={restaurant.info} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
