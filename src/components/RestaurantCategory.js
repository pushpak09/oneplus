import { useState } from "react";
import ItemList from "../components/ItemList";

const RestaurantCategory = ({ data }) => {
  const [showItems, setShowItems] = useState(false);
  const handleClick = () => {
    setShowItems(!showItems);
  };

  return (
    <div>
      <div className="w-6/12 mx-auto my-4 p-4 bg-slate-100 shadow-lg  rounded-sm">
        <div
          onClick={handleClick}
          className="flex justify-between cursor-pointer"
        >
          <span className="font-bold font-lg">
            {data.title} ({data.itemCards.length})
          </span>
          <span>🔽</span>
        </div>
        {showItems && <ItemList cardData={data.itemCards} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;
