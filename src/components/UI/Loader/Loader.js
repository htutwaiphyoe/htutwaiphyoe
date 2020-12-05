import { useEffect } from "react";
import classes from "./Loader.module.css";
const Loader = (props) => {
    useEffect(() => {
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = "visible";
        };
    }, []);
    return <div className={classes.Loader}></div>;
};
export default Loader;
