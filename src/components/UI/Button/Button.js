import classes from "./Button.module.css";
const Button = (props) => {
    let cssClasses = [classes.Button];
    if (props.animation) {
        cssClasses.push(classes.animation);
    }
    if (props.disabled) {
        cssClasses.push(classes.disabled);
    }
    return (
        <button
            className={cssClasses.join(" ")}
            onClick={props.onClickHandler}
            disabled={props.disabled}
        >
            {props.children}
        </button>
    );
};

export default Button;
