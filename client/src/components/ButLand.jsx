import React from "react";
import { Link } from "react-router-dom";
import style from "./ButLand.module.css";

export default function ButHome() {
  return (
    <div className={style.landing}>
      <Link to="/">
        <button>LANDING</button>
      </Link>
    </div>
  );
}
