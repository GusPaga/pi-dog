import React from "react";
import style from './Temp.module.css';

export function Temp({ state, temp, handleFilterByTemp }) {
  const filter = state.filter((e) => e.name !== "");

  const sortTemp = filter.sort(function (a, b) {
    if (a.name > b.name) {
      return 1;
    }
    if (b.name > a.name) {
      return -1;
    }
    return 0;
  });
  
  return (
    <div className={style.order}>
      <label className={style.label}>Select Temperament</label>
      <select className={style.temp}
      value={temp}
      onChange={(e) => handleFilterByTemp(e.target.value)}>
        <option value="All">All Temperaments</option>
        {sortTemp?.map((e) => (
          <option value={e.name} key={e.id}>
            {e.name}
          </option>
        ))}
      </select>
    </div>
  );
}
