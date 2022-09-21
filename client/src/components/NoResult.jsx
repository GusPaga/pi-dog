import React from "react";
import style from "./NoResult.module.css";

export default function NoResult() {
  return (
    <div className={style.result}>
      <h1>Sorry, no result found!! </h1>
      <h2>🔎</h2>
    </div>
  );
}
