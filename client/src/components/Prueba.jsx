import React from "react";
import style from "./Prueba.module.css";
import About from "./About";

export default function Flip() {
  return (
    <div className={style.flip}>
        
      <div className={style.card}>
        <div className={style.front}>
          <About/>
        </div>
        <div className={style.back}>
        <About/>
        </div>
      </div>
    </div>
  );
}
