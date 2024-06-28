import RestaurantCard, { enhancedRestaurantCard } from "./RestaurantCard";
import resList from "../utils/mockData";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import onlineStatus from "../utils/useOnlineStatus";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [listData, setListData] = useState([]);
  const [inputVal, setInputVal] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  const PromotedRestaurantCards = enhancedRestaurantCard(RestaurantCard);

  console.log("rest", listData);

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

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false) {
    return <h1>Please check Your Internet Connection</h1>;
  }

  return listData.length === 0 ? (
    <h1 className="load-data">Loading...</h1>
  ) : (
    <div className="body-container flex flex-wrap justify-center items-center ">
      <div className="filters flex items-center justify-center">
        <div className="m-4 p-4">
          <input
            className="border border-black rounded-sm h-9"
            type="text"
            onChange={(e) => {
              handleInputChange(e);
            }}
            value={inputVal}
          />
          <button
            className="p-2 bg-red-700 rounded-sm text-white"
            onClick={searchRestaurantClick}
          >
            Search
          </button>
        </div>
        <button
          className="bg-red-700 p-2 rounded-sm text-white"
          onClick={() => {
            topRatedRest();
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container container flex flex-wrap justify-center ">
        {filteredData.map((restaurant) => (
          <Link
            className="bg-slate-200 m-2 rounded-sm hover:scale-105 hover:shadow-xl hover:ease-in-out duration-300"
            key={restaurant.info.id}
            to={"restaurants/" + restaurant.info.id}
          >
            {restaurant.info.isOpen ? (
              <PromotedRestaurantCards resData={restaurant} />
            ) : (
              <RestaurantCard resData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
