import React from "react";
import style from "./Logo.module.css";

export default function Logo() {
  return (
    <div>
      <img
        className={style.Logo}
        src="https://assets.soyhenry.com/henry-landing/assets/Henry/logo-white.png"
        alt="logo Henry"
      ></img>
    </div>
  );
}
