import React, { useEffect, useState } from "react";
import axios from "axios";
import RestaurantItem from "./RestaurantItem";
import Modal from "../Modal";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";

function Restaurants() {
  const targetElement = document.body;
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [modalData, setModalData] = useState({});
  const [displayModal, setDisplayModal] = useState(false);

  const showDetails = (title, desc, images) => {
    setModalData({ title, desc, images });
    setDisplayModal(true);
    disableBodyScroll(targetElement, {
      allowTouchMove: Modal => {

        while (Modal && Modal !== document.body) {
          if (Modal.getAttribute('body-scroll-lock-ignore') !== null) {
            return true;
          }
    
          Modal= Modal.parentElement;
        }
      },
    });
  };

  useEffect(() => {
    setLoading(true);
    axios
      .get(`${process.env.REACT_APP_API_KEY}/api/restaurants?populate=images`)
      .then((response) => {
        setItems(response.data.data);
        setLoading(false);
      });
  }, []);
  return (
    <>
      {displayModal ? (
        <Modal
          data={modalData}
          onCloseButtonClick={() => {
            setDisplayModal(false);
            enableBodyScroll(targetElement);
          }}
        />
      ) : (
        ""
      )}
      <div id="restaurants" className="flex justify-center md:justify-start">
        {loading ? (
          <p>Loading</p>
        ) : (
          <div data-aos="fade-in" className="md:grid md:grid-cols-2 2xl:grid-cols-4">
            {items.map((item) => (
              <RestaurantItem
                key={item.id}
                title={item.attributes.name}
                desc={item.attributes.description}
                images={item.attributes.images}
                showFullInfo={showDetails}
              />
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default Restaurants;
