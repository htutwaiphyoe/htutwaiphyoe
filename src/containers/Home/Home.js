import { useCallback, useEffect, useRef } from "react";
import { Link, NavLink } from "react-router-dom";

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
            <nav className={classes.Nav}>
                <ul>
                    <li>
                        <NavLink to="/" activeClassName={classes.active}>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/about" activeClassName={classes.active}>
                            About
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/portfolio" activeClassName={classes.active}>
                            Portfolio
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/blogs" activeClassName={classes.active}>
                            Blogs
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact" activeClassName={classes.active}>
                            Contact
                        </NavLink>
                    </li>
                </ul>
            </nav>
            <div className={classes.Hero}>
                <div>
                    <h1>GIVING UP</h1>
                    <h2 ref={heading}>IS </h2>
                </div>
                <div className={classes.Btn}>
                    <Link to="/blogs">Discover Blogs</Link>
                </div>
            </div>
        </header>
    );
};

export default Home;
