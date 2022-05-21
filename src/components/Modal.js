import React from "react";
import Carousel from "nuka-carousel";

function Modal({ data, onCloseButtonClick }) {
  window.scrollTo(0, 0);
  return (
    <div
      data-aos="fade-in"
      className="absolute z-50 top-0 right-0 bottom-0 left-0 h-screen bg-black bg-opacity-60 flex justify-center items-center"
    >
      <div className="bg-white rounded-lg pt-3 pb-3 pr-4 pl-4 flex flex-col overflow-y-auto gap-4 items-center max-w-xs h-3/4 md:max-w-7xl xl:gap-16">
        <div className="flex flex-col text-center gap-4">
          <p className="font-bold md:text-3xl xl:mt-16">{data.title}</p>
          <div className="flex text-zinc-500 font-normal overflow-y-scroll h-48 md:overflow-y-hidden  md:h-min md:text-2xl md:max-w-5xl">
            {data.desc}
          </div>
        </div>

        <div className="md:max-w-xl">
        <Carousel>
          {data.images.data.map((image) => (
            <img
              className="rounded-lg object-cover md:w-full md:full"
              key={image.id}
              alt={image.name}
              src={`${process.env.REACT_APP_API_KEY}${image.attributes.formats.medium.url}`}
            />
          ))}
        </Carousel>
        </div>

        {/* <div className="flex flex-col gap-8 overflow-auto md:grid md:grid-cols-2 md:gap-4 md:place-items-center md:overflow-visible ">
          {data.images.data.map((image) => (
            <img
              className="rounded-lg md:object-cover md:h-5/6"
              key={image.id}
              alt={image.name}
              src={`${process.env.REACT_APP_API_KEY}${image.attributes.formats.medium.url}`}
            />
          ))}
        </div> */}
        <button
          onClick={onCloseButtonClick}
          className="bg-zinc-700 text-white p-4 rounded-lg w-32"
        >
          Close
        </button>
      </div>
    </div>
  );
}

export default Modal;
