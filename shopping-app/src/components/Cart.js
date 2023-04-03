import React from "react";
import "./Cart.css";
import { useDispatch, useSelector } from "react-redux";
import { cardActions } from "../store/card-slice";
const Cart = () => {
  const quantity = useSelector((state) => state.card.totalQuantity);
  const dispatch = useDispatch();
  const showCard = () => {
    dispatch(cardActions.setShowCard())
  }
  return (
    <div className="cartIcon">
      <h3 onClick={showCard}>Cart: {quantity} Items</h3>
    </div>
  );
};

export default Cart;
