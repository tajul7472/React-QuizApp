import classes from "../styles/MiniPlayer.module.css";

const MiniPlayer = () => {
  return (
    <div
      className={`${classes.miniPlayer} ${classes.floatingBtn}`}
     
    >
      <span className={`material-icons-outlined ${classes.open}`}>
        {" "}
        play_circle_filled{" "}
      </span>
      <span
        className={`material-icons-outlined ${classes.close}`}
        
      >
        {" "}
        close{" "}
      </span>
     
    </div>
  )
}

export default MiniPlayer