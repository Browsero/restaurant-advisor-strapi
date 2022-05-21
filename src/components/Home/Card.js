import React from "react";

function Card(props) {
  return (
    <div
      data-aos="zoom-in"
      className={`flex flex-col gap-4 items-center text-center bg-zinc-200 p-8 rounded-lg shadow-lg ${props?.addClass}`}
    >
      {props?.icon}
      <h1 className="font-bold md:text-xl">{props?.title}</h1>
      <p className="md:text-lg">{props?.children}</p>
    </div>
  );
}

export default Card;
