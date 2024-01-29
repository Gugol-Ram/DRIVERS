// import React from "react";
import errorImage from "./Img/error404.gif";
import style from "./Styles/Error.module.css";

export default function Error() {
  return (
    <div className={style.body}>
      <div className={style.Error404}>
        <h1>Driver not found, please Try another Name or Surname!</h1>
        <img src={errorImage} alt="whitout results" />
      </div>
    </div>
  );
}
