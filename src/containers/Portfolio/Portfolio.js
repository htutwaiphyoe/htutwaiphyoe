import React, { useState, useEffect } from "react";
import NavigationList from "../../components/NavigationList/NavigationList";
import classes from "./Portfolio.module.css";

import omnifood from "../../assets/imgs/omnifood.png";
import natours from "../../assets/imgs/natours.png";
import nexter from "../../assets/imgs/nexter.png";
import piggame from "../../assets/imgs/piggame.png";
import tictactoe from "../../assets/imgs/tictactoe.png";
import budgety from "../../assets/imgs/budgety.png";
import forkify from "../../assets/imgs/forkify.png";
import splashy from "../../assets/imgs/splashy.png";
import covid from "../../assets/imgs/covid.png";
import burger from "../../assets/imgs/burger.png";
import photify from "../../assets/imgs/photify.png";
import hwp from "../../assets/imgs/hwp.png";
const skillsSet = {
    db: 63,
    ds: 55,
    dp: 50,
    git: 65,
};
const Portfolio = (props) => {
    const [designPercentage, setdesignPercentage] = useState(0);
    const [jsPercentage, setjsPercentage] = useState(0);
    const [reactPercentage, setreactPercentage] = useState(0);
    const [nodePercentage, setnodePercentage] = useState(0);
    const [dbPercentage, setdbPercentage] = useState(0);
    const [dsPercentage, setdsPercentage] = useState(0);
    const [dpPercentage, setdpPercentage] = useState(0);
    const [gitPercentage, setgitPercentage] = useState(0);

    useEffect(() => {
        let timer;
        if (dbPercentage < skillsSet.db) {
            timer = setTimeout(() => {
                setdbPercentage((prevPercentage) => prevPercentage + 1);
            }, 50);
        }
        return () => {
            clearTimeout(timer);
        };
    }, [dbPercentage]);
    useEffect(() => {
        let timer;
        if (dsPercentage < skillsSet.ds) {
            timer = setTimeout(() => {
                setdsPercentage((prevPercentage) => prevPercentage + 1);
            }, 50);
        }
        return () => {
            clearTimeout(timer);
        };
    }, [dsPercentage]);
    useEffect(() => {
        let timer;
        if (dpPercentage < skillsSet.dp) {
            timer = setTimeout(() => {
                setdpPercentage((prevPercentage) => prevPercentage + 1);
            }, 50);
        }
        return () => {
            clearTimeout(timer);
        };
    }, [dpPercentage]);
    useEffect(() => {
        let timer;
        if (gitPercentage < skillsSet.git) {
            timer = setTimeout(() => {
                setgitPercentage((prevPercentage) => prevPercentage + 1);
            }, 50);
        }
        return () => {
            clearTimeout(timer);
        };
    }, [gitPercentage]);
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
                    <div className={classes.SkillsBox}>
                        <div className={classes.SkillsSetsBarBox}>
                            <div className={classes.SkillsBar}>
                                <div className={classes.SkillsSetBar}>
                                    <h2>Database</h2>
                                    <div className={classes.OutterBar}>
                                        <div
                                            className={classes.InnerBar}
                                            style={{ width: `${dbPercentage}%` }}
                                        ></div>
                                    </div>
                                </div>
                                <div className={classes.SkillsSetBar}>
                                    <h2>Data Structures & Algorithms</h2>
                                    <div className={classes.OutterBar}>
                                        <div
                                            className={classes.InnerBar}
                                            style={{ width: `${dsPercentage}%` }}
                                        ></div>
                                    </div>
                                </div>
                            </div>
                            <div className={classes.SkillsBar}>
                                <div className={classes.SkillsSetBar}>
                                    <h2>Design Patterns</h2>
                                    <div className={classes.OutterBar}>
                                        <div
                                            className={classes.InnerBar}
                                            style={{ width: `${dpPercentage}%` }}
                                        ></div>
                                    </div>
                                </div>
                                <div className={classes.SkillsSetBar}>
                                    <h2>Git & Github</h2>
                                    <div className={classes.OutterBar}>
                                        <div
                                            className={classes.InnerBar}
                                            style={{ width: `${gitPercentage}%` }}
                                        ></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
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
                <div className={classes.Projects}>
                    <h1>Projects</h1>
                    <div className={classes.ProjectsBox}>
                        <div className={classes.ProjectsSet}>
                            <div className={classes.ProjectsSetImage}>
                                <img src={omnifood} alt="Project Prototype" />
                            </div>

                            <div className={classes.ProjectsSetText}>
                                <p className={classes.ProjectsSetTag}>#webdesign</p>
                                <p className={classes.ProjectsSetTitle}>
                                    Landing page for Omnifood
                                </p>
                                <div className={classes.ProjectsSetActions}>
                                    <a
                                        href="https://hwpomnifood.netlify.app"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        See in action
                                    </a>
                                    <a
                                        href="https://github.com/htutwaiphyoe/Omnifood"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        See in code
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className={classes.ProjectsSet}>
                            <div className={classes.ProjectsSetImage}>
                                <img src={natours} alt="Project Prototype" />
                            </div>
                            <div className={classes.ProjectsSetText}>
                                <p className={classes.ProjectsSetTag}>#webdesign</p>
                                <p className={classes.ProjectsSetTitle}>Landing page for Natours</p>
                                <div className={classes.ProjectsSetActions}>
                                    <a
                                        href="https://hwpnatours.netlify.app"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        See in action
                                    </a>
                                    <a
                                        href="https://github.com/htutwaiphyoe/Natours"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        See in code
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className={classes.ProjectsSet}>
                            <div className={classes.ProjectsSetImage}>
                                <img src={nexter} alt="Project Prototype" />
                            </div>

                            <div className={classes.ProjectsSetText}>
                                <p className={classes.ProjectsSetTag}>#webdesign</p>
                                <p className={classes.ProjectsSetTitle}>Landing page for Nexter</p>
                                <div className={classes.ProjectsSetActions}>
                                    <a
                                        href="https://hwpnexter.netlify.app"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        See in action
                                    </a>
                                    <a
                                        href="https://github.com/htutwaiphyoe/Nexter"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        See in code
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={classes.ProjectsBox}>
                        <div className={classes.ProjectsSet}>
                            <div className={classes.ProjectsSetImage}>
                                <img src={piggame} alt="Project Prototype" />
                            </div>

                            <div className={classes.ProjectsSetText}>
                                <p className={classes.ProjectsSetTag}>#javascript</p>
                                <p className={classes.ProjectsSetTitle}>Pig Game</p>
                                <div className={classes.ProjectsSetActions}>
                                    <a
                                        href="https://hwppiggame.netlify.app"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        See in action
                                    </a>
                                    <a
                                        href="https://github.com/htutwaiphyoe/PigGame"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        See in code
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className={classes.ProjectsSet}>
                            <div className={classes.ProjectsSetImage}>
                                <img src={tictactoe} alt="Project Prototype" />
                            </div>
                            <div className={classes.ProjectsSetText}>
                                <p className={classes.ProjectsSetTag}>#javascript</p>
                                <p className={classes.ProjectsSetTitle}>TicTacToe Game</p>
                                <div className={classes.ProjectsSetActions}>
                                    <a
                                        href="https://hwptictactoe.netlify.app"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        See in action
                                    </a>
                                    <a
                                        href="https://github.com/htutwaiphyoe/TicTacToe"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        See in code
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className={classes.ProjectsSet}>
                            <div className={classes.ProjectsSetImage}>
                                <img src={budgety} alt="Project Prototype" />
                            </div>

                            <div className={classes.ProjectsSetText}>
                                <p className={classes.ProjectsSetTag}>#javascript</p>
                                <p className={classes.ProjectsSetTitle}>Budget Management App</p>
                                <div className={classes.ProjectsSetActions}>
                                    <a
                                        href="https://hwpbudgety.netlify.app"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        See in action
                                    </a>
                                    <a
                                        href="https://github.com/htutwaiphyoe/Budgety"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        See in code
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={classes.ProjectsBox}>
                        <div className={classes.ProjectsSet}>
                            <div className={classes.ProjectsSetImage}>
                                <img src={forkify} alt="Project Prototype" />
                            </div>

                            <div className={classes.ProjectsSetText}>
                                <p className={classes.ProjectsSetTag}>#javascript</p>
                                <p className={classes.ProjectsSetTitle}>Forkify</p>
                                <div className={classes.ProjectsSetActions}>
                                    <a
                                        href="https://hwpforkify.netlify.app"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        See in action
                                    </a>
                                    <a
                                        href="https://github.com/htutwaiphyoe/Forkify"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        See in code
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className={classes.ProjectsSet}>
                            <div className={classes.ProjectsSetImage}>
                                <img src={splashy} alt="Project Prototype" />
                            </div>
                            <div className={classes.ProjectsSetText}>
                                <p className={classes.ProjectsSetTag}>#javascript</p>
                                <p className={classes.ProjectsSetTitle}>Splashy - Unplash Clone</p>
                                <div className={classes.ProjectsSetActions}>
                                    <a
                                        href="https://hwpsplashy.netlify.app"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        See in action
                                    </a>
                                    <a
                                        href="https://github.com/htutwaiphyoe/Splashy"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        See in code
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className={classes.ProjectsSet}>
                            <div className={classes.ProjectsSetImage}>
                                <img src={covid} alt="Project Prototype" />
                            </div>

                            <div className={classes.ProjectsSetText}>
                                <p className={classes.ProjectsSetTag}>#javascript</p>
                                <p className={classes.ProjectsSetTitle}>Covid19 Tracker</p>
                                <div className={classes.ProjectsSetActions}>
                                    <a
                                        href="https://covid19trackersite.netlify.app"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        See in action
                                    </a>
                                    <a
                                        href="https://github.com/htutwaiphyoe/Covid19Tracker"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        See in code
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={classes.ProjectsBox}>
                        <div className={classes.ProjectsSet}>
                            <div className={classes.ProjectsSetImage}>
                                <img src={burger} alt="Project Prototype" />
                            </div>

                            <div className={classes.ProjectsSetText}>
                                <p className={classes.ProjectsSetTag}>#react</p>
                                <p className={classes.ProjectsSetTitle}>BurgerBuilder</p>
                                <div className={classes.ProjectsSetActions}>
                                    <a
                                        href="https://burgerbuilder-413b0.web.app"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        See in action
                                    </a>
                                    <a
                                        href="https://github.com/htutwaiphyoe/BurgerBuilder-ReactRedux"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        See in code
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className={classes.ProjectsSet}>
                            <div className={classes.ProjectsSetImage}>
                                <img src={photify} alt="Project Prototype" />
                            </div>
                            <div className={classes.ProjectsSetText}>
                                <p className={classes.ProjectsSetTag}>#react</p>
                                <p className={classes.ProjectsSetTitle}>
                                    Photify - Dynamic Grid Photoes
                                </p>
                                <div className={classes.ProjectsSetActions}>
                                    <a
                                        href="https://photify.web.app"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        See in action
                                    </a>
                                    <a
                                        href="https://github.com/htutwaiphyoe/Photify"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        See in code
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className={classes.ProjectsSet}>
                            <div className={classes.ProjectsSetImage}>
                                <img src={hwp} alt="Project Prototype" />
                            </div>

                            <div className={classes.ProjectsSetText}>
                                <p className={classes.ProjectsSetTag}>#react</p>
                                <p className={classes.ProjectsSetTitle}>
                                    Htut Wai Phyoe - Portfolio
                                </p>
                                <div className={classes.ProjectsSetActions}>
                                    <a
                                        href="https://covid19trackersite.netlify.app"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        See in action
                                    </a>
                                    <a
                                        href="https://github.com/htutwaiphyoe/htutwaiphyoe"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        See in code
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Portfolio;
