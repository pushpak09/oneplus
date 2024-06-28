import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [btnText, setBtnText] = useState("Login");
  const onlineStaus = useOnlineStatus();
  return (
    <div className="flex justify-between bg-pink-100 shadow-lg mb-4">
      <div className="logo">
        <img className="w-40" src={LOGO_URL} />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4">
            Online Status :{" "}
            {onlineStaus ? (
              <span className="green"></span>
            ) : (
              <span className="red"></span>
            )}
          </li>
          <li className="px-4 hover:text-red-700">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4 hover:text-red-700">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-4 hover:text-red-700">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-4 hover:text-red-700">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-4 hover:text-red-700">Cart</li>
          <button
            className="px-4"
            onClick={() => {
              btnText === "Login" ? setBtnText("Logout") : setBtnText("Login");
            }}
          >
            {btnText}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
