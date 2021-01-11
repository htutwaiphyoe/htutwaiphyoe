import React from "react";

import classes from "./Toast.module.css";
const Toast = React.memo((props) => (
    <div className={`${classes.Toast} ${props.toast && classes.Show}`}>{props.message}</div>
));

export default Toast;
