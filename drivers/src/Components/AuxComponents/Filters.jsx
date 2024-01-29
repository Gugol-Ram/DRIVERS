// useState;
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import style from "./Styles/Filters.module.css";
import {
  filterBySource,
  filterTeams,
  getTeams,
  orderBy,
  // teamComb,
} from "../../Redux/Actions/indexActions";

const Filters = ({ setCurrentPage }) => {
  const dispatch = useDispatch();
  const allTeams = useSelector((state) => state.teams);
  allTeams.sort((a, b) => a.name.localeCompare(b.name)); //ordenar alfabeticamente

  // const [currentPage, setCurrentPage] = useState(1);

  const handleSort = (event) => {
    dispatch(orderBy(event.target.value));
  };

  const handleFilter = (event) => {
    dispatch(filterTeams(event.target.value));
    setCurrentPage(1);
  };

  const handleSource = (event) => {
    dispatch(filterBySource(event.target.value));
    setCurrentPage(1);
  };

  // const handleTeamComb = (event) => {
  //   const teamsSelected = event.target.value;
  //   if (teamsSelected === "All" && !selectedTeams.includes(teamsSelected)) {
  //     setSelectedTeams([...selectedTeams, teamsSelected]);
  //   }
  // };

  // const handleSend = () => {
  //   dispatch(teamComb(selectedTeams));
  //   setSelectedTeams([]);
  // };

  useEffect(() => {
    dispatch(getTeams());
  }, [dispatch]);

  return (
    <div className={style.box}>
      <select onChange={handleSort}>
        <option value="Default">Order by...</option>
        <option value="A-Z">NAME: A - Z</option>
        <option value="Z-A">NAME: Z - A</option>
        <option value="DATE UP">Date of Birth: Younger</option>
        <option value="DATE DOWN">Date of Birth: Older</option>
      </select>

      <select onChange={handleFilter}>
        <option value="All">Teams...</option>
        {allTeams.map((team) => (
          <option key={team.id} value={team.name}>
            {team.name}{" "}
          </option>
        ))}
      </select>

      <select onChange={handleSource}>
        <option value="all">Filter By Source...</option>
        <option value="API">Obtained From The Web</option>
        <option value="DataBase">Created By User: DataBase</option>
      </select>

      {/* <select onChange={handleTeamComb}>
        <option value="All">Combinated Teams...</option>
        {allTeams.map((team) => (
          <option key={team.id} value={team.name}>
            {team.name}{" "}
          </option>
        ))}
      </select>
      <button className={style.send} onClick={handleSend}>
        Send
      </button> */}
    </div>
  );
};

export default Filters;
