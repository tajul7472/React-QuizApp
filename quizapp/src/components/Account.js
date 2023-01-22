import React from 'react'
import classes from "../styles/Account.module.css";

const Account = () => {
  return (
    <div className={classes.account}>
    <span className="material-icons-outlined" title="Account">
    account_circle
  </span>
  <a >Signup</a>
    </div>
  )
}

export default Account