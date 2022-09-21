import React from "react";
import { Link } from "react-router-dom";
import ButLand from "./ButLand";
import style from "./About.module.css";
import Lin from "../components/images/linkedin.png";
import Git from "../components/images/github.png";
import Gus from "../components/images/Gustavo.png";

export default function AboutEng() {
  return (
    <div>
      <div className={style.container}>
        <div className={style.body}>
          <div className={style.gus}>
            <img src={Gus} alt="GAP" />
          </div>

          <div className={style.contact}>
            <div>
              <h2>Gustavo Pagano</h2>
              <label>Name</label>
              <h2>Maipú - Mendoza - Argentina</h2>
              <label>City</label>
            </div>
            <div>
              <p>
                I am a technology enthusiast, I like to learn, teach and to
                share. I recently discovered a new world programming.
              </p>
              <p>
                Now I want to apply everything I have learned in these years of
                work to becomeFullStack Developer!
              </p>
              <p>You can contact me on my social networks :)</p>
            </div>
          </div>
        </div>

        <div className={style.rs}>
          <a
            href="https://www.linkedin.com/in/gustavopagano-5b39b4154/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={Lin} alt="LinkedIn" />
          </a>
          <a href="https://github.com/GusPaga" target="_blank" rel="noreferrer">
            <img src={Git} alt="GitHub" />
          </a>
        </div>

        <div className={style.but}>
          <p>To spanish version touch "ESP"</p>
          <Link to="/about">
            <button>ESP</button>
          </Link>
          <p>To Return touch "LANDING"</p>
          <ButLand />
        </div>
      </div>
    </div>
  );
}
