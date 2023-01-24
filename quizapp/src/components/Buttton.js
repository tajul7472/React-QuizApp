import classes from "../styles/Button.module.css";

const Buttton = ({ className, children, ...rest }) => {
  return (
    <button className={`${classes.button} ${className}`} {...rest}>
      {children}
    </button>
  )
}

export default Buttton