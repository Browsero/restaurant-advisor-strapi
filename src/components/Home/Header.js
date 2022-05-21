import React from 'react'
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="p-8 flex flex-col items-center shadow-sm justify-center gap-8 md:flex-row md:gap-32">
      <div className="grid grid-cols-2 gap-4">
        <div data-aos="zoom-in" className="flex items-end">
          <img
            className="w-64 object-cover shadow-lg rounded-lg md:w-72"
            alt="img-3"
            src={process.env.PUBLIC_URL + "/food/meat.jpg"}
          />
        </div>

        <div data-aos="fade-down-left">
          <img
            className="w-64 object-cover shadow-lg rounded-lg md:w-72"
            alt="img-1"
            src={process.env.PUBLIC_URL + "/food/bowl.jpg"}
          />
        </div>
        <div data-aos="fade-up-right">
          <img
            className="w-64 object-cover shadow-lg rounded-lg md:w-72"
            alt="img-4"
            src={process.env.PUBLIC_URL + "/food/salad.jpg"}
          />
        </div>
        <div data-aos="fade-up-left">
          <img
            className="w-64 object-cover shadow-lg rounded-lg md:w-72"
            alt="img-2"
            src={process.env.PUBLIC_URL + "/food/dinner.jpg"}
          />
        </div>
      </div>
      <div className="flex flex-col gap-6">
        <div
          data-aos="zoom-in"
          className="text-center flex flex-col gap-4 md:text-left"
        >
          <h1 className="font-bold text-3xl md:text-5xl">
            Welcome to Restaurants Advisor
          </h1>
          <p className="text-zinc-600 text-lg font-thin">
            This app is powered by Strapi and React.
          </p>
          <button className="bg-red-400 w-full text-zinc-50 font-medium p-4 rounded-lg transition hover:scale-105 md:w-48">
          <Link to='/restaurants'>Browse restaurants</Link>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Header