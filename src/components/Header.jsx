import { useState } from "react";
import { LOGO_URL } from "../utils/constant";

import useOnlineStatus from "../utils/useOnlineStatus";
import { useSelector } from "react-redux";
import { Link } from "react-router";

const Header = () => {

  const [btnName , setbtnName] = useState("Login");

  const status = useOnlineStatus();

  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

  return (
    <div className="flex justify-between bg-orange-100 m-4 rounded-2xl shadow-xl">
      <div className="w-30 m-6">
        <img className="rounded-[50%]" src={LOGO_URL} />
      </div>
      <div className="flex m-6 items-center ">
        <ul className="flex p-4">
          <li className="px-3 py-1.5">
            {" "}
            Online Status : {status ? "✅" : "❌"}
          </li>
          <li className="px-3 py-1.5">
            <Link to="/">Home</Link>
          </li>
          <li className="px-3 py-1.5">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-3 py-1.5">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-3 py-1.5">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-3 py-1.5">
            <Link to ="/cart">Cart ({cartItems.length})</Link>
          </li>
          <button
            className="login-btn w-20 mx-4  border-2 rounded-xl bg-orange-300 hover:bg-orange-400"
            onClick={() => {
              if (btnName == "Login") setbtnName("Logout");
              else setbtnName("Login");
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;