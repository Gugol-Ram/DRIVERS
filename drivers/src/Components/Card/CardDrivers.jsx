import React from "react";
import { NavLink } from "react-router-dom";
import style from "./CardDrivers.module.css";
import { imgPerDefault } from "../../Utils/Utils";
import { useDispatch } from "react-redux";
import { deleteDriver, getDrivers } from "../../Redux/Actions/indexActions";

const CardDrivers = ({ driver }) => {
  const defaultImg = imgPerDefault;
  // verifico si es de la base de datos a traves de la estructura de su ID
  const isDataBaseDriver =
    typeof driver.id === "string" &&
    driver.id.match(
      /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/
    );

  let teamString = ""; //inicializo cadena de Teams

  if (isDataBaseDriver) {
    if (driver.Teams && driver.Teams.length > 0) {
      teamString = driver.Teams.map((team) => team.name).join(", ");
    }
  } else {
    teamString = driver.teams;
  }

  const dispatch = useDispatch();
  const deleteButton = async (id, element) => {
    await dispatch(deleteDriver(id));
    dispatch(getDrivers(element));
  };

  return (
    <div className={style.container}>
      <div className={style.card}>
        <img
          className={style.image}
          src={!driver.image ? defaultImg : driver.image}
          alt="img-driver"
        />

        <div className={style.name}>
          <h2>
            {driver.name} {driver.surname}
          </h2>
        </div>

        <div className={style.data}>
          <h4 className={style.subTittles}>Teams:</h4>
          <h4 className={style.teamString}>{teamString}</h4>

          <h4 className={style.subTittles}>Nationality:</h4>
          <h4 className={style.nationality}>{`${driver.nationality}`}</h4>

          <h4 className={style.subTittles}>Date of Birth:</h4>
          <h4 className={style.nationality}>{`${driver.dateOfBirth}`}</h4>

          <NavLink className={style.nav} to={`/drivers/${driver.id}`}>
            <button className={style.button}>Learn More...</button>
          </NavLink>

          {/* {isDataBaseDriver && (
            <button
              className={style.button}
              onClick={() => deleteButton(driver.id)}
            >
              Delete
            </button>
          )} */}
        </div>
      </div>
    </div>
  );
};

export default CardDrivers;
