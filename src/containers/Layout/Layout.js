import React from "react";
// import NavigationList from "../../components/NavigationList/NavigationList";

const Layout = (props) => {
    return (
        <React.Fragment>
            <main>{props.children}</main>
        </React.Fragment>
    );
};

export default Layout;
