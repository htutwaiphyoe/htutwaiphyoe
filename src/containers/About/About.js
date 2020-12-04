import React from "react";

import img from "../../assets/imgs/about5.jpg";
import NavigationList from "../../components/NavigationList/NavigationList";
import classes from "./About.module.css";
const About = (props) => {
    return (
        <React.Fragment>
            <NavigationList />
            <div className={classes.About}>
                <div className={classes.Intro}>
                    <div className={classes.IntroImg}>
                        <img src={img} alt="About" />
                    </div>
                    <div className={classes.IntroText}>
                        <h1>Hi! I'm Htut Wai Phyoe</h1>
                        <p>
                            I'm currently a 20 years old university student studying at Mandalay
                            Technological University specialized in Computer Engineering &
                            Information Technology. I started coding during second year and now I
                            extremely have a passion on programming and apparently I'm pursuing Web
                            Development. I also write articles about Web Development. Feel free to
                            contact if you have something with me.
                        </p>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default About;
