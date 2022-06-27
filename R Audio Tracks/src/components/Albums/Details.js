import Modal from '../UI/Modal';

import classes from './Details.module.css';

const Details = (props) => {
  return (
    <Modal onClose={props.onClose}>
    
    <div>
        <h3>{props.title}</h3>
      </div>
      <div>{props.singerName}</div>
      <div>{props.description}</div>
      <div>number of tracks : {props.tracksNumber}</div>

      <div>{props.img}</div>
      <div className={classes.actions}>
        <button className={classes.buttonAlt} onClick={props.onClose}>
          Close
        </button>
      </div>
    </Modal>
  );
};

export default Details;
