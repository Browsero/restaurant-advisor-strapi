import React from "react";



function RestaurantItem({ title, desc, images, showFullInfo }) {
    console.log(`${images.data[1].attributes.formats.medium.url}`);
  return (
    <div className="flex flex-col gap-4 w-96 p-8 transition scale-105 hover:scale-110 cursor-default">
      <img
        className="w-96 h-72 object-cover rounded-lg cursor-pointer"
        onClick={() => {
          showFullInfo(title, desc, images);
        }}
        alt={title}
        src={`${process.env.REACT_APP_API_KEY}${images.data[1].attributes.formats.medium.url}`}
      />
      <p className="font-semibold text-2xl">{title}</p>
    </div>
  );
}

export default RestaurantItem;
