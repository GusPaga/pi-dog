import React from "react";
import Footer from "./Footer";
import Logo from "./Logo";
import ButHome from "./ButHome";
import style from "./Landing.module.css";
import Slide from "./Slide";
import ButAbo from "./ButAbo";

export default function Landing() {
  return (
    <div>
      <nav className={style.nav}>
        <div className={style.navLogo}>
          <Logo />
        </div>
        <div className={style.navBut}>
          <ButAbo/>
        </div>
      </nav>

      <div className={style.landing}>
        <div className={style.slide}>
          <Slide />
        </div>
        <h1>"This API was created for HENRY by Gustavo Pagano"</h1>
        <ButHome />
        <h3>to enter, touch HOME!</h3>
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
}