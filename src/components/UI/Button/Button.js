import { Link } from "react-router-dom";
import classes from "./Button.module.css";
const Button = (props) => {
    return (
        <div className={classes.Button}>
            <Link to={props.route}>{props.content}</Link>
        </div>
    );
};

export default Button;
