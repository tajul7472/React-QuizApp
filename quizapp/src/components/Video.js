import React from 'react'
import logo from "../assets/images/3.jpg"
import classes from "../styles/Video.module.css";
const Video = () => {
  return (
    <div className={classes.video}>
    <img src={logo} alt=""/>
    <p>React Hooks Bangla Tutorial</p>
    <div className={classes.qmeta}>
      <p>Questions</p>
      <p>Total points : </p>
    </div>
  </div>
);
  
}

export default Video