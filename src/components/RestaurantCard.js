import { CDN_URL } from "../utils/constants";

const RestaurantCard = ({ resData }) => {
  const { cloudinaryImageId, name, cuisines, avgRating } = resData?.info;
  return (
    <div className="res-card w-[250px] flex flex-col rounded-sm p-2">
      <img
        className="h-[276px] rounded-sm"
        alt="card-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3 className="mt-2 font-semibold">{name}</h3>
      <h4 className="leading-[18px]">{cuisines.join(", ")}</h4>
      <h4 className="mt-2">{avgRating}</h4>
      {/* <h3>{time}</h3> */}
    </div>
  );
};

export const enhancedRestaurantCard = (RestaurantCard) => {
  return (props) => {
    return (
      <>
        <div className="absolute bg-black text-zinc-100 m-2 p-1 rounded-sm text-xs">
          Promoted
        </div>
        <RestaurantCard {...props} />
      </>
    );
  };
};

export default RestaurantCard;
