import classes from "./Button.module.css";
const Button = (props) => {
    let cssClasses = [classes.Button];
    if (props.animation) {
        cssClasses.push(classes.animation);
    }
    return (
        <button className={cssClasses.join(" ")} onClick={props.onClickHandler}>
            {props.children}
        </button>
    );
};

export default Button;
