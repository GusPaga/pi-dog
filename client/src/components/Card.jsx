import React from "react";
import style from "./Card.module.css";

export default function Card({
  name,
  image,
  min_weight,
  max_weight,
  temperament,
}) {
  return (
    <div className={style.card}>
      <h3>{name}</h3>
      <div className={style.detail}>
        <div>
          <img className={style.img} src={image} alt={name} />
        </div>
        <div>
          <h5>Weight</h5>
          <p>Min: {min_weight} Kg</p>
          <p>Max: {max_weight} Kg</p>
          <h5>Temperment</h5>
          <p>{temperament}</p>
        </div>
      </div>
    </div>
  );
}
