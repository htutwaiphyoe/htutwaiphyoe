import classes from "./FormElement.module.css";
const FormElement = (props) => {
    const cssClasses = [props.className];
    if (props.touch && !props.valid) {
        cssClasses.push(classes.Touch);
    }

    switch (props.type) {
        case "textarea":
            return (
                <textarea
                    {...props.configs}
                    className={cssClasses.join(" ")}
                    value={props.value}
                    onChange={props.onChangeHandler}
                />
            );
        case "select":
            return (
                <select
                    className={cssClasses.join(" ")}
                    value={props.value}
                    onChange={props.onChangeHandler}
                >
                    {props.configs.options.map((option) => (
                        <option value={option.value} key={option.value}>
                            {option.displayValue}
                        </option>
                    ))}
                </select>
            );
        default:
            return (
                <input
                    {...props.configs}
                    className={cssClasses.join(" ")}
                    value={props.value}
                    onChange={props.onChangeHandler}
                    autoComplete="off"
                />
            );
    }
};

export default FormElement;
