import React from "react";
import { useDispatch } from "react-redux";
import { orderBy } from "../redux/action";
import style from "./Order.module.css";

export default function Order({ setPage, setOrder }) {
  const dispatch = useDispatch();

  function handlerOrder(e) {
    dispatch(orderBy(e.target.value));
    setPage(1);
    setOrder(`Ordenado ${e.target.value}`);
  }

  return (
    <div className={style.order}>
      <label className={style.label}>Select Order</label>
      <select className={style.select} onChange={(e) => handlerOrder(e)}>
        <option value="A-Z">Name 🡇</option>
        <option value="Z-A">Name 🡅</option>
        <option value="Asc">Weight 🡇</option>
        <option value="Des">Weight 🡅</option>
      </select>
    </div>
  );
}
