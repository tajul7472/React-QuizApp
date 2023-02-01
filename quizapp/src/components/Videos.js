import React from 'react'
import Video from './Video'
import classes from "../styles/Videos.module.css";
import { Link } from 'react-router-dom';

const Videos = () => {
  return (
    <div className={classes.videos}>
      <Link to="/quiz"><Video /></Link>



    </div>
  )
}

export default Videos