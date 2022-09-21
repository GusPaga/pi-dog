import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { details } from "../redux/action";
import ButHome from "./ButHome";
import ButForm from "./ButForm";
import Footer from "./Footer";
import style from "./Detail.module.css";
import Loader from "./Loader";

export default function Default() {
  const detail = useSelector((state) => state.details);
  const dispatch = useDispatch();
  const params = useParams();
  console.log("Detail", detail);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    dispatch(details(params.id)).then(() => setLoader(false));
  }, [dispatch, params.id]);

  if (loader) {
    return <Loader />;
  }

  return (
    <div>
      <Footer />
      <div className={style.detail}>
        <div className={style.title}>
          <h1>{detail.name}</h1>
        </div>
        <div className={style.description}>
          <img className={style.img} src={detail.image} alt={detail.name} />
          <div className={style.paragraph}>
            <h3>Description:</h3>
            <label>Weight</label>
            <div className={style.div}>
              <p>{detail.min_weight}</p>
              <p>{"-"} </p>
              <p>{detail.max_weight} Kg</p>
            </div>
            <label>Height</label>
            <div className={style.div}>
              <p>{detail.min_height}</p>
              <p>{"-"} </p>
              <p>{detail.max_height} cm</p>
            </div>
            <label>Years of Life</label>
            <p>{detail.life}</p>
            <label>Temperaments</label>
            <p> {detail.temperament}</p>
          </div>
        </div>
        <div className={style.buttons}>
          <ButHome />
          <ButForm />
        </div>
      </div>
    </div>
  );
}
