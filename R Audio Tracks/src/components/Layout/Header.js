import React, { Fragment } from "react";
import classes from "./Header.module.css";
import musicImage from "../../assets/music.jpg";


const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>React Audio Tracks</h1>
      </header>

      <div className={classes["main-image"]}>
        <img src={musicImage} alt="multi-colors music line"></img>
      </div>
    </Fragment>
  );
};

export default Header;
