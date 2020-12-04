import React from "react";
import classes from "./MessageBox.module.css";
const MessageBox = (props) => {
    let components = null;
    console.log(props);
    if (props.message === "Network Error") {
        components = (
            <React.Fragment>
                <p>No internet connection.</p>
                <p>Please connect and try again.</p>
            </React.Fragment>
        );
    } else {
        components = (
            <React.Fragment>
                <p>Something went wrong!</p>
                <p>Please reload and try again.</p>
            </React.Fragment>
        );
    }
    return <div className={classes.MessageBox}>{components}</div>;
};

export default MessageBox;
