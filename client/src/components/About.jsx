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
              <label>Nombre</label>
              <h2>Maipú - Mendoza - Argentina</h2>
              <label>Ciudad</label>
            </div>
            <div>
              <p>
                Soy entusiasta de la tecnología, me gusta aprender, enseñar y
                compartir. Hace poco descubrí un mundo nuevo programando.
              </p>
              <p>
                Ahora quiero aplicar todo lo que he aprendido en estos años de
                trabajar para convertirse FullStack Developer!
              </p>
              <p>Puedes contactarme en mis redes sociales :)</p>
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
          <p>To english version touch "ENG"</p>
          <Link to="/aboutEng">
            <button>ENG</button>
          </Link>
          <p>Para volver presiona "LANDING"</p>
          <ButLand />
        </div>
      </div>
    </div>
  );
}
