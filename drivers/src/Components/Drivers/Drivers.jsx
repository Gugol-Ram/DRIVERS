import React, { useState } from "react";
import { useDispatch } from "react-redux";

import Load from "../AuxComponents/Load";
import Error from "../AuxComponents/Error";

import CardDrivers from "../Card/CardDrivers";
import { getDrivers } from "../../Redux/Actions/indexActions";
import style from "./Drivers.module.css";

export default function Drivers({ drivers }) {
  const dispatch = useDispatch();
  const [load, setLoad] = useState(true); //para indicar si la carga de conductores esta en progreso, por defecto true.

  React.useEffect(() => {
    dispatch(getDrivers()).then(() => setLoad(false)); //efecto secundario cuando se monta el componente, despacho la accion de traer todos los conductores y me actualizo el estado load a falso
  }, [dispatch]);

  if (load) {
    //si load es true(se estan obeteniendo los drivers), hago uso del componente aux LOAD para mostrar "algo" en pantalla(la imagencita que use en ese componente, basicamente)
    return <Load />;
  }

  return (
    <div className={style.cards}>
      {drivers && drivers.length > 0 ? (
        drivers?.map((driv) => <CardDrivers key={driv.id} driver={driv} />)
      ) : (
        <Error />
      )}
    </div>
  );
}
