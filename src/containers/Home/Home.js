import { Link, NavLink } from "react-router-dom";

import classes from "./Home.module.css";
const Home = (props) => {
    return (
        <header className={classes.Home}>
            <nav className={classes.Nav}>
                <ul>
                    <li>
                        <NavLink to="/" activeClassName={classes.active}>
                            HOME
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/about" activeClassName={classes.active}>
                            ABOUT
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/portfolio" activeClassName={classes.active}>
                            PORTFOLIO
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/blogs" activeClassName={classes.active}>
                            BLOGS
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact" activeClassName={classes.active}>
                            CONTACT
                        </NavLink>
                    </li>
                </ul>
            </nav>
            <div className={classes.Hero}>
                <div>
                    <h1>GIVING UP</h1>
                    <h2>IS NOT A OPTION</h2>
                </div>
                <div>
                    <Link to="/blogs">Read Articles</Link>
                </div>
            </div>
        </header>
    );
};

export default Home;
