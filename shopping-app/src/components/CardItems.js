import React from "react";
import CardItem from "./CardItem";
import "./Card.css";
import { useSelector } from "react-redux";
const CardItems = () => {
  const cardItems = useSelector((state) => state.card.itemsList);
  // console.log(cardItems)
  return (
    <div className="card-container">
      <h2>Your Card</h2>
      <ul>
        {cardItems.map((item) => (
          <li key={item.id}>
            {" "}
            <CardItem
              quantity={item.quantity}
              id={item.id}
              price={item.price}
              total={item.totalPrice}
              name={item.name}
            />{" "}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CardItems;
