import React from "react";
import style from "./ClearBut.module.css";

const ClearBut = ({ clearHandleClick }) => {
  
  return (
    <div className={style.clearBut}>
      <button onClick={(e) => clearHandleClick(e)}>CLEAR</button>
    </div>
  );
};
export default ClearBut;
