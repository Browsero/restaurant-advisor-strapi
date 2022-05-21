import React, { useState } from "react";
import { Link } from "react-router-dom";
import Burger from "./Burger";
import Menu from "./Menu";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="flex justify-between items-center p-8 shadow-sm w-screen md:w-full">
      <div className="flex items-center gap-4 cursor-default">
        <img
          className="w-16"
          alt="logo"
          src={process.env.PUBLIC_URL + "/restaurant.png"}
        />
        <h1 className="hidden md:w-32 ">
          Restaurant <span className="bg-red-50 p-2 rounded-lg">Advisor</span>
        </h1>
      </div>
      <div className="md:hidden">
          <Burger open={open} setOpen={setOpen} />
          <Menu open={open} setOpen={setOpen} />
        </div>
        <ul className="hidden md:flex md:gap-8 md:mr-16">
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/restaurants'>Restaurants</Link></li>
        <li><Link to='/contact'>Contact</Link></li>
        </ul>
    </nav>
  );
}

export default Navbar;
