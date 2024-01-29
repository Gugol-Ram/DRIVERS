// import React from "react";
import { Link } from "react-router-dom";
import style from "./Landing.module.css";

const Landing = () => {
  return (
    <div className={style.landingContainer}>
      <div>
        <div className={style.landingContent}>
          <h1>Welcome to Henry Drivers!</h1>
          <p className={style.parr}>The best F1 Drivers info in the world.</p>
        </div>

        <div className={style.landingBox}>
          <div className={style.landingLinks}>
            <button className={style.btnText}>Enter as a guest? :</button>
            <Link to="/drivers" className={style.landingLink}>
              <button className={style.btn}>🏁Let's Go!🏁</button>
            </Link>

            <span to="/register" className={style.landingLink}>
              <button className={style.btnText}>
                Are you looking for additional features?
              </button>
              <br />
              <br />
              <button className={style.btn} disabled>
                🏁Create new User!🏁
              </button>
              <p className={style.disabledP}>*Very Soon*</p>
            </span>
            <div to="/login" className={style.landingLink}>
              <button className={style.btnText}>
                Already have an Account?
              </button>
              <br />
              <br />
              <button className={style.btn} disabled>
                🏁Login!🏁
              </button>
              <p className={style.disabledP}>*Very Soon*</p>
            </div>

            <button className={style.btnText}>
              Need more info about the developer?
            </button>
            {/* <span className={style.landingLink}>
            Need more info about the developer?
            <br />
          </span> */}
            <Link to="/about" className={style.landingLink}>
              <button className={style.btn}>🏁About Me!🏁</button>
            </Link>
            {/* <br /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
