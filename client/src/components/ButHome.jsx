import React from "react";
import { Link } from "react-router-dom";
import style from "./ButHome.module.css";
import { useDispatch } from "react-redux";
import { cleanDetail } from "../redux/action";


export default function ButHome() {
  const dispatch = useDispatch();

  // FUNCTION TO SET DETEILS STATE IN EMPTY WHEN CLICK ON BUTTON HOME IN THE DETAIL CARD
  function handleSubmit(e) {
    dispatch(cleanDetail());
    //console.log("dispatch cleanDetail");
  }
  return (
    <div className={style.butHome}>
      <Link to="/home">
        <button
        type="submit"
        onClick={(e) => handleSubmit(e)}>HOME</button>
      </Link>
    </div>
  );
};
