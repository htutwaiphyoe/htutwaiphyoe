import { useEffect, useRef } from "react";

import NavigationList from "../../components/NavigationList/NavigationList";
import Button from "../../components/UI/Button/Button";
import classes from "./Home.module.css";
const Home = (props) => {
    const heading = useRef();
    let i = 0;
    let txt = "NOT A OPTION"; /* The text */
    let speed = 500; /* The speed/duration of the effect in milliseconds */
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
    useEffect(() => {
        typeWriter();
    }, []);
    return (
        <header className={classes.Home}>
            <NavigationList />
            <div className={classes.Hero}>
                <div>
                    <h1>GIVING UP</h1>
                    <h2 ref={heading}>IS </h2>
                </div>
                <Button route="/blogs" content="Discover Blogs" />
            </div>
        </header>
    );
};

export default Home;
