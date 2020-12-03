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
    let cssClasses = [classes.NavigationList];
    if (props.transparent) {
        cssClasses.push(classes.Transparent);
    }
    let navItemsComponent = navItems.map((item, index) => (
        <li key={index}>
            <NavLink
                to={item.route}
                exact={item.route === "/blogs" ? false : true}
                activeClassName={classes.active}
            >
                {item.content}
            </NavLink>
        </li>
    ));
    return (
        <nav className={cssClasses.join(" ")}>
            <ul>{navItemsComponent}</ul>
        </nav>
    );
};

export default NavigationList;
