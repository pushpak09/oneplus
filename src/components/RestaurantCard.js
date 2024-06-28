const RestaurantCard = ({ resData }) => {
  const { cloudinaryImageId, name, cuisines, avgRating } = resData?.info;
  return (
    <div className="res-card w-[250px] flex flex-col rounded-sm p-2">
      <img
        className="h-[276px] rounded-sm"
        alt="card-logo"
        src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`}
      />
      <h3 className="mt-2 font-semibold">{name}</h3>
      <h4 className="leading-[18px]">{cuisines.join(", ")}</h4>
      <h4 className="mt-2">{avgRating}</h4>
      {/* <h3>{time}</h3> */}
    </div>
  );
};

export default RestaurantCard;
