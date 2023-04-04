import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { cardActions } from "../store/card-slice";
import "./Card.css";
const Card = () => {
  const quantity = useSelector((state) => state.card.totalQuantity);
  const dispatch = useDispatch();
  const showCard = () => {
    dispatch(cardActions.setShowCard())
  }
  return (
    <div className="cardIcon">
      <h3 onClick={showCard}>Cart: {quantity} Items</h3>
    </div>
  );
};

export default Card;
