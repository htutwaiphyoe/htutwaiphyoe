import { useEffect, useRef, useCallback } from "react";
import NavigationList from "../../components/NavigationList/NavigationList";
import Button from "../../components/UI/Button/Button";
import classes from "./Home.module.css";
const Home = (props) => {
    const heading = useRef();
    let i = 0;
    let txt = "NOT AN OPTION"; /* The text */
    let speed = 500; /* The speed/duration of the effect in milliseconds */
    useEffect(() => {
        document.title = "Htut Wai Phyoe | Web Developer";
    }, []);
    useEffect(() => {
        const typeWriter = () => {
            if (heading.current) {
                if (i < txt.length) {
                    heading.current.innerHTML += `${txt.charAt(i)}`;
                    i++;
                    setTimeout(typeWriter, speed);
                } else {
                    i = 0;
                    heading.current.innerHTML = "IS ";
                    setTimeout(typeWriter, speed);
                }
            }
        };
        typeWriter();
    }, []);
    const onButtonClick = useCallback(() => {
        props.history.push("/blogs");
    }, [props.history]);
    return (
        <header className={classes.Home}>
            <NavigationList transparent={true} />
            <div className={classes.Hero}>
                <div>
                    <h1>GIVING UP</h1>
                    <h2 ref={heading}>IS </h2>
                </div>
                <Button onClickHandler={onButtonClick} animation={true}>
                    Discover Blogs
                </Button>
            </div>
        </header>
    );
};

export default Home;
