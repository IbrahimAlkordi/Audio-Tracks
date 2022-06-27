import { useState,Fragment } from "react";
import classes from "./AlbumItem.module.css";
import Details from "./Details";
const AlbumItem = (props) => {
  const [detailsIsShown, setDetailsIsShown] = useState(false);
  const showDetailsHandler = () => {
    setDetailsIsShown(true);
  };
  const hideDetailsHandler = () => {
    setDetailsIsShown(false);
  };
  return (
    <Fragment>
        {detailsIsShown && (
          <Details
            onClose={hideDetailsHandler}
            title={props.title}
            singerName={props.singerName}
            img={props.img}
            description={props.description}
            tracksNumber={props.tracksNumber}
          />
        )}
      <li className={classes.item} onClick={showDetailsHandler}>
        <div>
          <h3>{props.title}</h3>
          <div className={classes.singerName}>{props.singerName}</div>
        </div>
        <div className={classes.img}>{props.img}</div>
      </li>
    </Fragment>
  );
};

export default AlbumItem;
