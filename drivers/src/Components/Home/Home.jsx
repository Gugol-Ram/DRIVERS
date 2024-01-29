import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  getDrivers,
  getTeams,
  orderBy,
  filterTeams,
  filterBySource,
  teamComb,
} from "../../Redux/Actions/indexActions";

import Drivers from "../Drivers/Drivers";
import SearchBar from "../SearchBar/SearchBar";
import Pagination from "../Pagination/Pagination";
import Load from "../AuxComponents/Load";
import Filters from "../AuxComponents/Filters";

import styles from "./Home.module.css";

export default function Home() {
  const dispatch = useDispatch();
  const drivers = useSelector((state) => state.allDrivers);

  const [currentPage, setCurrentPage] = useState(1); //1er pag
  const [driversPerPage] = useState(9); //cantidad a mostrar
  const indexOfLastDriver = currentPage * driversPerPage;
  const indexOfFirstDriver = indexOfLastDriver - driversPerPage;
  const currentDrivers = drivers.slice(indexOfFirstDriver, indexOfLastDriver);

  const paginated = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  const [loadingMessage, setLoadingMessage] = useState(
    "Loading Drivers, please Stand By..."
  );

  function handleSort(event) {
    event.preventDefault();
    if (event.target.value === "") {
      dispatch(getDrivers());
    } else {
      dispatch(orderBy(event.target.value));
      setCurrentPage(1);
    }
  }

  function handleSource(event) {
    event.preventDefault();
    if (event.target.value === "") {
      dispatch(getDrivers());
    } else {
      dispatch(filterBySource(event.target.value));
      setCurrentPage(1);
    }
  }

  function handleFilter(event) {
    event.preventDefault();
    if (event.target.value === "") {
      dispatch(getDrivers());
    } else {
      dispatch(filterTeams(event.target.value));
      setCurrentPage(1);
    }
  }

  function handleTeamComb(event) {
    event.preventDefault();
    if (event.target.value === "") {
      dispatch(getDrivers());
    } else {
      dispatch(teamComb(event.target.value));
      setCurrentPage(1);
    }
  }

  useEffect(() => {
    dispatch(getDrivers());
    dispatch(getTeams());
  }, [dispatch]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!drivers.length) {
        setLoadingMessage("Not Drivers Found");
      }
    }, 5000); // Cambio de mensaje después de 10 segundos

    return () => clearTimeout(timeout);
  }, [drivers.length]);

  return (
    <div className={styles.backGround}>
      <SearchBar />
      <div className={styles.filterContainer}>
        <div className={styles.filter}>
          <Filters
            handleSort={handleSort}
            handleSource={handleSource}
            handleFilter={handleFilter}
            handleTeamComb={handleTeamComb}
            setCurrentPage={setCurrentPage}
          />
        </div>
      </div>
      {!drivers.length ? (
        <div>
          <img className={styles.image} src={Load} alt="." />
          <h2 className={styles.loading}>{loadingMessage}</h2>
        </div>
      ) : (
        <div>
          <Drivers drivers={currentDrivers} />
          <Pagination
            driversPerPage={driversPerPage}
            drivers={drivers.length}
            currentPage={currentPage}
            paginated={paginated}
          />
        </div>
      )}
    </div>
  );
}
