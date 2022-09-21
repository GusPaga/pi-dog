import React, { useRef, useEffect } from "react";
import style from "./Slide.module.css";
import img1 from "./images/unidos.jpg";
import img2 from "./images/forest.jpg";
import img3 from "./images/truck.jpg";
import img4 from "./images/terraza.jpg";

export default function Slide() {
  const slide = useRef(null);
  const intervalSlide = useRef(null);

  const front = () => {
    //console.log(slide.current.children);
    //comprobamos que slide tenga elementos//
    if (slide.current.children.length > 0) {
      //obtenemos el primer elemento//
      const first = slide.current.children[0];
      //establecemos la transición//
      slide.current.style.transition = `3000ms ease-out all`;
      //obtener el ancho//
      const width = slide.current.children[0].offsetWidth;
      //movemos el slide//
      slide.current.style.transform = `translateX(-${width}px)`;

      //volver al punto de inicio//
      const transition = () => {
        slide.current.style.transition = "none";
        slide.current.style.transform = `translateX(0)`;
        //envia el primer elemento al final
        slide.current.appendChild(first);
        slide.current.removeEventListener("transitionend", transition);
      };
      //función para poder capturar el momento en que termina el ciclo//
      slide.current.addEventListener("transitionend", transition);
    }
  };

  useEffect(() => {
    console.log("componenet did mount");
    intervalSlide.current = setInterval(() => {
      front();
    }, 4000);
    //stop intervals//
    slide.current.addEventListener("mouseenter", () => {
      clearInterval(intervalSlide.current);
    });
    // active again the intervals //
    slide.current.addEventListener("mouseleave", () => {
      intervalSlide.current = setInterval(() => {
        front();
      }, 4000);
    });
    // function to unmonut slider when the componet is not activ //
    return () => {
      console.log("component did unmount");
      clearInterval(intervalSlide.current);
    };
  }, []);

  return (
    <div className={style.sli_principal}>
      <div className={style.sli_slide} ref={slide}>
        <div className={style.sli}>
          <img className={style.sli_img} src={img1} alt="pan" />
          <div className={style.texto}>
            <p>Friend!!</p>
          </div>
        </div>
        <div className={style.sli}>
          <img className={style.sli_img} src={img2} alt="pan" />
          <div className={style.texto}>
            <p>Pet!</p>
          </div>
        </div>
        <div className={style.sli}>
          <img className={style.sli_img} src={img3} alt="pan" />
          <div className={style.texto}>
            <p>Companions!</p>
          </div>
        </div>
        <div className={style.sli}>
          <img className={style.sli_img} src={img4} alt="pan" />
          <div className={style.texto}>
            <p>Guardian!</p>
          </div>
        </div>
      </div>
    </div>
  );
}
