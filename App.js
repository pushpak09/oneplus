import React from "react";
import ReactDOM from "react-dom/client";


const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img src="https://w7.pngwing.com/pngs/894/279/png-transparent-online-food-ordering-food-delivery-grubhub-others-food-service-logo.png" />
      </div>
      <div className="nav-link">
        <ul>
          <li>Home</li>
          <li>Contact Us</li>
          <li>About Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="App">
      <Header />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
