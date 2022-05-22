import React from "react";
import Card from "./Card";
import { AiOutlineSafetyCertificate } from "react-icons/ai";
import { RiRefund2Line, RiCustomerService2Line } from "react-icons/ri";
import { BsPeopleFill } from "react-icons/bs";
import { BiWorld } from "react-icons/bi";

function Main() {
  return (
    <div
      className="bg-zinc-100 mt-24 p-16 flex flex-col items-center gap-8 xl:mt-96"
    >
      <div className="text-center flex flex-col gap-4">
        <p className="font-bold text-2xl text-orange-600">Features</p>
        <h1 className="font-bold text-3xl">
          Still wondering if it's worth it?
        </h1>
      </div>
      <div className="flex flex-col gap-12 justify-center md:grid md:grid-cols-2 md:gap-12">
        <Card
          title="Certified Restaurants"
          icon={
            <AiOutlineSafetyCertificate className="text-5xl text-orange-600" />
          }
        >
          Each restaurant is checked and its owner is verified by our employees.
        </Card>
        <Card
          title="Fair Return Policy"
          icon={<RiRefund2Line className="text-5xl text-orange-600" />}
        >
          If we did not meet your expectations, you will receive a refund
          immediately after reporting it to customer service.
        </Card>
        <Card
          title="Large Community"
          icon={<BsPeopleFill className="text-5xl text-orange-600" />}
        >
          Our biggest advantage is our community. We have already been trusted
          by over 25,000 people.
        </Card>
        <Card
          title="24/7 Customer Service"
          icon={<RiCustomerService2Line className="text-5xl text-orange-600" />}
        >
          If there is any problem, our team will help you at any time of the day
          or night.
        </Card>
        <Card
          title="International coverage"
          icon={<BiWorld className="text-5xl text-orange-600" />}
          addClass="col-span-2"
        >
          Thanks to our services, you can find your favorite place in almost
          every country in Europe.
        </Card>
      </div>
    </div>
  );
}

export default Main;
