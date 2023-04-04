import React from "react";

import "./Product.css";
import { useDispatch } from "react-redux";
import { cardActions } from "../store/card-slice";
const Product = ({ name, id, imgURL, price }) => {
  const dispatch = useDispatch();
  const addToCard = () => {
    dispatch(
      cardActions.addToCard({
        name,
        id,
        price,
      })
    );
  };

  return (
    <div className="card">
      <img src={imgURL} alt={name} />
      <h2>{name}</h2>
      <p>$ {price}</p>
      <button onClick={addToCard}>Add to Card</button>
    </div>
  );
};

export default Product;
