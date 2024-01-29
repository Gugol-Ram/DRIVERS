import React from "react";
import { useState, useEffect } from "react";

import style from "./Styles/Load.module.css";
import loadImg from "./Img/loadingGif.gif";

// componente sencillo de carga para montar mientras se obtiene la data
export default function Loading() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 10000); // 3000 milisegundos = 3 segundos
  }, []);
  // por algun motivo que no entiendo no funciona.

  if (isLoading) {
    return (
      <div className={style.loading}>
        <img src={loadImg} alt="." />
        <img src={loadImg} alt="." />
        <img src={loadImg} alt="." />
        <img src={loadImg} alt="." />
        <img src={loadImg} alt="." />
      </div>
    );
  }
}
