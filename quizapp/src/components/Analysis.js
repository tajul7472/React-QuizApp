import classes from "../styles/Analysis.module.css";
import Question from "./Question";

const Analysis = () => {
  return (
    <div className={classes.analysis}>
    <h1>Question Analysis</h1>
    <Question/>
  </div>
  )
}

export default Analysis