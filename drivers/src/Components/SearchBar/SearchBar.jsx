import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getDriverByName } from "../../Redux/Actions/indexActions";
import searchImage from "./lupa.png";
import style from "./SearchBar.module.css";

export default function SearchBar() {
  let [state, setState] = useState(""); //inicializa mi estado local
  const dispatch = useDispatch(); //despacho acciones al store

  const handlerChange = (event) => {
    event.preventDefault();
    setState(event.target.value);
  };
  // const nameRegex = /^[a-zA-Z\s]+$/;
  function handleSubmit(event) {
    event.preventDefault();
    if (state.length > 1 && isNaN(state)) {
      dispatch(getDriverByName(state));
      setState("");
    } else {
      alert("Invalid Search, name/surname cannot be empty, or a Number");
    }
  }

  return (
    <div className={style.containerSearch}>
      <input
        className={style.input}
        type="search"
        placeholder="Search By Name or Surname"
        onChange={(event) => handlerChange(event)}
        value={state}
      />
      <button type="submit" onClick={(event) => handleSubmit(event)}>
        <div className={style.search}>
          <img src={searchImage} alt="search" />
        </div>
      </button>
    </div>
  );
}
