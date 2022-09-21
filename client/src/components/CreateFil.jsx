import React from "react";
import style from "./CreateFil.module.css";

export default function CreateFil({  originHandleSelect, origin }) {

  return (
    <div className={style.order}>
      <label className={style.label}>Select Origins</label>
      <select value={origin} className={style.create} onChange={(e) => originHandleSelect(e.target.value)}>
        <option value="All">All Origins</option>
        <option value="Api">Only Api</option>
        <option value="Own">Only Ours</option>
      </select>
    </div>
  );
}
