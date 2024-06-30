import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
import { CDN_URL } from "../utils/constants";

const ItemList = ({ cardData }) => {
  const dispatch = useDispatch();
  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };

  return (
    <div>
      {cardData.map((item, i) => (
        <div
          key={item.card.info.id}
          className="p-2 m-2 border-b-2 text-left flex"
        >
          <div className="w-10/12 mr-2">
            <div className="mb-1">
              <span>{item.card.info.name}</span>
              <span>
                {" "}
                - ₹{" "}
                {item.card.info.price
                  ? item.card.info.price / 100
                  : item.card.info.defaultPrice / 100}
              </span>
            </div>
            <p className="text-xs ">{item.card.info.description}</p>
          </div>
          <div className="relative">
            <img
              className="h-[100px] w-[100px] rounded-sm"
              alt="card-logo"
              src={CDN_URL + item.card.info.imageId}
            />
            <button
              className="p-1 bg-black text-white shadow-lg absolute bottom-[10px] left-[50%] translate-x-[-50%] rounded-sm text-xs"
              onClick={() => handleAddItem(item)}
            >
              Add
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
