import React from "react";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import {
  clearDetails,
  getDetailDriver,
} from "../../Redux/Actions/indexActions";
import style from "./Detail.module.css";
import Error from "../AuxComponents/Error";
import { imgPerDefault, isUUIDv4 } from "../../Utils/Utils";

export default function Detail() {
  const params = useParams();
  const defaultImg = imgPerDefault;

  const dispatch = useDispatch();

  const isIDv4 = isUUIDv4;

  const driverDetail = useSelector((state) => state.driversById);

  const api = isIDv4(driverDetail.id)
    ? driverDetail.Teams.map((team) => team.name).join(", ")
    : driverDetail.teams;

  const loading = useSelector((state) => state.loading);

  const error = useSelector((state) => state.error);

  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getDetailDriver(params.id));
    window.scrollTo(0, 0);
    return () => {
      dispatch(clearDetails());
    };
  }, [dispatch, params.id]); // para que despache la accion, es decir me traiga es id especifico

  if (driverDetail.image === "") {
    driverDetail.image = defaultImg;
  }

  if (loading) {
    return <div>Loading ID...</div>;
  }

  if (error) {
    return <div>{<Error />}</div>;
  }

  return (
    <div className={style.generalContent}>
      <div classname={style.backgroundLayer}>
        <div className={style.header}>
          <h1 className={style.name}>
            {driverDetail.name} {driverDetail.surname}{" "}
          </h1>

          <div className={style.info}>
            <img
              className={style.image}
              src={driverDetail.image}
              alt="driver-img"
            />
            <div className={style.blockOne}>
              <h3 className={style.id}>ID: {driverDetail.id} </h3>

              <h3 className={style.tittles}>Teams:</h3>
              <h4 className={style.subTittle}>{api}</h4>

              <h3 className={style.tittles}>Date of Birth:</h3>
              <h5 classname={style.dates}>(YYYY-MM-DD)</h5>
              <h4
                className={style.subTittle}
              >{`${driverDetail.dateOfBirth}`}</h4>

              <h3 className={style.tittles}>Nationality: </h3>
              <h4 className={style.subTittle}>{driverDetail.nationality}</h4>
              <h3 className={style.tittles}>Description: </h3>
              <h4 className={style.subTittle}>
                {!driverDetail.description
                  ? "This Driver Don't have any description to show"
                  : driverDetail.description}
              </h4>
            </div>
          </div>

          <div className={style.btnContent}>
            <button className={style.back} onClick={() => navigate("/drivers")}>
              <b className={style.btnBack}>Back to Home!</b>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
