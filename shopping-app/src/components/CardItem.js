import React from "react";
import { useDispatch } from "react-redux";
import "./Card.css";
import { cardActions } from "../store/card-slice";
const CardItem = ({ name, quantity, total, price, id }) => {
  const dispatch = useDispatch();
  const incrementCardItem = () => {
    dispatch(
      cardActions.addToCard({
        name,
        id,
        price,
      })
    );
  };
  const decrementCardItem = () => {
    dispatch(cardActions.removeFromCard(id));
  };
  return (
    <div className="cardItem">
      <h2> {name}</h2>
      <p>${price} /-</p>
      <p>x{quantity}</p>
      <article>Total ${total}</article>
      <button onClick={decrementCardItem} className="card-actions">
        -
      </button>
      <button onClick={incrementCardItem} className="card-actions">
        +
      </button>
    </div>
  );
};

export default CardItem;
