import React, { useState, useEffect } from "react";
import NavigationList from "../../components/NavigationList/NavigationList";
import LinearProgress from "@material-ui/core/LinearProgress";
import classes from "./Portfolio.module.css";
const Portfolio = (props) => {
    const [designPercentage, setdesignPercentage] = useState(0);
    const [jsPercentage, setjsPercentage] = useState(0);
    const [reactPercentage, setreactPercentage] = useState(0);
    const [nodePercentage, setnodePercentage] = useState(0);
    useEffect(() => {
        let timer;
        if (designPercentage < 78) {
            timer = setTimeout(() => {
                setdesignPercentage((prevPercentage) => prevPercentage + 1);
            }, 50);
        }
        return () => {
            clearTimeout(timer);
        };
    }, [designPercentage]);

    useEffect(() => {
        let timer;
        if (jsPercentage < 74) {
            timer = setTimeout(() => {
                setjsPercentage((prevPercentage) => prevPercentage + 1);
            }, 50);
        }
        return () => {
            clearTimeout(timer);
        };
    }, [jsPercentage]);
    useEffect(() => {
        let timer;
        if (reactPercentage < 65) {
            timer = setTimeout(() => {
                setreactPercentage((prevPercentage) => prevPercentage + 1);
            }, 50);
        }
        return () => {
            clearTimeout(timer);
        };
    }, [reactPercentage]);
    useEffect(() => {
        let timer;
        if (nodePercentage < 50) {
            timer = setTimeout(() => {
                setnodePercentage((prevPercentage) => prevPercentage + 1);
            }, 50);
        }
        return () => {
            clearTimeout(timer);
        };
    }, [nodePercentage]);
    return (
        <React.Fragment>
            <NavigationList transparent={false} />
            <div className={classes.Portfolio}>
                <div className={classes.Statistics}>
                    <h1>Status</h1>
                    <div className={classes.StatisticsBox}>
                        <div className={classes.StatisticsItem}>
                            <ion-icon name="medal-sharp"></ion-icon>
                            <p>
                                <span>17+ </span>projects done
                            </p>
                        </div>
                        <div className={classes.StatisticsItem}>
                            <ion-icon name="people-sharp"></ion-icon>
                            <p>
                                <span>5+ </span>partners
                            </p>
                        </div>
                        <div className={classes.StatisticsItem}>
                            <ion-icon name="time-sharp"></ion-icon>
                            <p>
                                <span>1+ </span>years of experience
                            </p>
                        </div>
                    </div>
                </div>

                <div className={classes.Skills}>
                    <h1>Skill Sets</h1>
                    <div className={classes.SkillsBox}>
                        <div className={classes.SkillsSetsBox}>
                            <div className={classes.SkillsSet}>
                                <div className={classes.SkillsSetCircle}>
                                    <svg>
                                        <circle cx="95" cy="95" r="90"></circle>
                                        <circle
                                            cx="95"
                                            cy="95"
                                            r="90"
                                            style={{
                                                strokeDashoffset: `calc(570 - 570 * ${designPercentage} / 100)`,
                                            }}
                                        ></circle>
                                    </svg>
                                    <div className={classes.Percentage}>{designPercentage}%</div>
                                </div>
                                <div className={classes.SkillsSetIcon}>HTML, CSS, SASS</div>
                            </div>
                            <div className={classes.SkillsSet}>
                                <div className={classes.SkillsSetCircle}>
                                    <svg>
                                        <circle cx="95" cy="95" r="90"></circle>
                                        <circle
                                            cx="95"
                                            cy="95"
                                            r="90"
                                            style={{
                                                strokeDashoffset: `calc(570 - 570 * ${jsPercentage} / 100)`,
                                            }}
                                        ></circle>
                                    </svg>
                                    <div className={classes.Percentage}>{jsPercentage}%</div>
                                </div>
                                <div className={classes.SkillsSetIcon}>JavaScript</div>
                            </div>
                        </div>
                        <div className={classes.SkillsSetsBox}>
                            <div className={classes.SkillsSet}>
                                <div className={classes.SkillsSetCircle}>
                                    <svg>
                                        <circle cx="95" cy="95" r="90"></circle>
                                        <circle
                                            cx="95"
                                            cy="95"
                                            r="90"
                                            style={{
                                                strokeDashoffset: `calc(570 - 570 * ${reactPercentage} / 100)`,
                                            }}
                                        ></circle>
                                    </svg>
                                    <div className={classes.Percentage}>{reactPercentage}%</div>
                                </div>
                                <div className={classes.SkillsSetIcon}>React.js</div>
                            </div>
                            <div className={classes.SkillsSet}>
                                <div className={classes.SkillsSetCircle}>
                                    <svg>
                                        <circle cx="95" cy="95" r="90"></circle>
                                        <circle
                                            cx="95"
                                            cy="95"
                                            r="90"
                                            style={{
                                                strokeDashoffset: `calc(570 - 570 * ${nodePercentage} / 100)`,
                                            }}
                                        ></circle>
                                    </svg>
                                    <div className={classes.Percentage}>
                                        {nodePercentage}%
                                        {/* <ion-icon name="logo-javascript"></ion-icon> */}
                                    </div>
                                </div>
                                <div className={classes.SkillsSetIcon}>Node.js</div>
                            </div>
                        </div>
                    </div>
                    {/* <div>
                        <h2>Others</h2>
                        <LinearProgress
                            variant="determinate"
                            value={60}
                            style={{ color: "#772ce8", height: "10px" }}
                        />
                    </div> */}
                </div>
            </div>
        </React.Fragment>
    );
};

export default Portfolio;
