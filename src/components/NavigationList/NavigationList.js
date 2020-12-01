import { NavLink } from "react-router-dom";

import classes from "./NavigationList.module.css";
const navItems = [
    { route: "/", content: "Home" },
    { route: "/about", content: "About" },
    { route: "/portfolio", content: "Portfolio" },
    { route: "/blogs", content: "Blogs" },
    { route: "/contact", content: "Contact" },
];
const NavigationList = (props) => {
    let navItemsComponent = navItems.map((item) => (
        <li>
            <NavLink to={item.route} activeClassName={classes.active}>
                {item.content}
            </NavLink>
        </li>
    ));
    return (
        <nav className={classes.NavigationList}>
            <ul>{navItemsComponent}</ul>
        </nav>
    );
};

export default NavigationList;
