import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Body = () => {
  const [listData, setListData] = useState([]);
  const [inputVal, setInputVal] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5204303&lng=73.8567437&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );

      const jsonData = await response.json();

      const restaurants =
        jsonData?.data?.cards?.[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants;

      if (restaurants.length > 0) {
        setListData(restaurants);
        setFilteredData(restaurants);
      } else {
        console.warn("Restaurants data is not available in the response");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const topRatedRest = () => {
    const filteredList = listData.filter((val) => val.info.avgRating > 4);
    setListData(filteredList);
  };

  const handleInputChange = (e) => {
    setInputVal(e.target.value);
    const updatedList = listData.filter((res) =>
      res.info.name.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setFilteredData(updatedList);
  };

  const searchRestaurantClick = () => {
    const updatedList = listData.filter((res) =>
      res.info.name.toLowerCase().includes(inputVal.toLowerCase())
    );
    setFilteredData(updatedList);
  };

  return listData.length === 0 ? (
    <h1 className="load-data">Loading...</h1>
  ) : (
    <div className="body-container">
      <div className="filters">
        <div className="search-btn-wrapper">
          <input
            type="text"
            onChange={(e) => {
              handleInputChange(e);
            }}
            value={inputVal}
          />
          <button onClick={searchRestaurantClick}>Search</button>
        </div>
        <button
          className="top-rated-cta"
          onClick={() => {
            topRatedRest();
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {filteredData.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"restaurants/" + restaurant.info.id}
          >
            <RestaurantCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
