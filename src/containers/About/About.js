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
                            What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing
                            and typesetting industry. Lorem Ipsum has been the industry's standard
                            dummy text ever since the 1500s, when an unknown printer took a galley
                            of type and scrambled it to make a type specimen book. It has survived
                            not only five centuries, but also the leap into electronic typesetting,
                            remaining essentially unchanged. It was popularised in the 1960s with
                            the release of Letraset sheets containing Lorem Ipsum passages.
                        </p>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default About;
