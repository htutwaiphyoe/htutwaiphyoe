import React from "react";
import { Link } from "react-router-dom";

import NavigationList from "../../NavigationList/NavigationList";
import classes from "./MessageBox.module.css";
const MessageBox = (props) => {
    let components = null;
    if (props.message === "Network Error") {
        components = (
            <React.Fragment>
                <p>No internet connection.</p>
                <p>Please connect and try again.</p>
            </React.Fragment>
        );
    } else if (props.message === "404") {
        components = (
            <React.Fragment>
                <p>404 Page not found.</p>
                <p>
                    <Link to="/">Go back to Home page</Link>
                </p>
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
