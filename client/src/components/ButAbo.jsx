import React from "react";
import { Link } from "react-router-dom";
import style from "./ButForm.module.css";

export default function ButHome() {
  return (
    <div className={style.butForm}>
      <Link to="/aboutEng">
        <button>ABOUT</button>
      </Link>
    </div>
  );
}
