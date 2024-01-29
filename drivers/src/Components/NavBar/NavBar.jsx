import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import { getDrivers } from "../../Redux/Actions/indexActions";
import SearchBar from "../SearchBar/SearchBar";
import style from "./NavBar.module.css";

const NavBar = () => {
  const dispatch = useDispatch(); //sino no puedo despachar mis acciones

  const pathSearch = "/home";
  const path = window.location.pathname; //para que la searchBar solo se muestre en /home(comparo rutas)

  const handleRefresh = (element) => {
    dispatch(getDrivers(element));
  };

  return (
    <nav>
      <div className={style.mainContainer}>
        {path !== "/drivers" ? (
          <Link to="/drivers" className={style.menu}>
            Home
          </Link>
        ) : (
          <Link to="/" className={style.menu}>
            Landing
          </Link>
        )}
        {path !== "/create" ? (
          <Link to="/create" className={style.menu}>
            Create New Driver
          </Link>
        ) : null}
        {path === "/drivers" && (
          <button className={style.buttonCont} onClick={handleRefresh}>
            <b className={style.menu}>Reload!</b>
          </button>
        )}

        {path === pathSearch ? <SearchBar /> : null}
      </div>
    </nav>
  );
};

export default NavBar;
