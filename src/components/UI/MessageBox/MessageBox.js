import React from "react";

import NavigationList from "../../NavigationList/NavigationList";
import classes from "./MessageBox.module.css";
const MessageBox = (props) => {
    let components = null;
    if (props.message) {
        components = (
            <React.Fragment>
                <p>{props.message}</p>
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
    return (
        <React.Fragment>
            <NavigationList transparent={false} />
            <div className={classes.MessageBox}>{components}</div>
        </React.Fragment>
    );
};

export default MessageBox;
