import React, { useEffect } from "react";
import NavigationList from "../../components/NavigationList/NavigationList";
import SkillSet from "../../components/SkillSet/SkillSet";
import ProjectSet from "../../components/ProjectSet/ProjectSet";
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

const statistics = [
    { icon: "medal-sharp", amount: "17", text: "projects done" },
    { icon: "people-sharp", amount: "5", text: "partners" },
    { icon: "time-sharp", amount: "1", text: "years of coding" },
];
const Portfolio = (props) => {
    useEffect(() => {
        window.scrollTo({ top: 0 });
    });
    return (
        <React.Fragment>
            <NavigationList transparent={false} />
            <div className={classes.Portfolio}>
                <div className={classes.Skills}>
                    <h1>Skill Sets</h1>
                    <div className={classes.SkillsBox}>
                        <div className={classes.SkillsSetsBox}>
                            <SkillSet type={"design"} content={"HTML, CSS, SASS"} />
                            <SkillSet type={"js"} content={"JavaScript"} />
                        </div>
                        <div className={classes.SkillsSetsBox}>
                            <SkillSet type={"react"} content={"React.js"} />
                            <SkillSet type={"node"} content={"Node.js"} />
                        </div>
                    </div>
                    <div className={classes.SkillsBox}>
                        <div className={classes.SkillsSetsBarBox}>
                            <div className={classes.SkillsBar}>
                                <SkillSet type={"db"} content={"Database"} bar={true} />
                                <SkillSet
                                    type={"ds"}
                                    content={"Data Structures & Algorithms"}
                                    bar={true}
                                />
                            </div>
                            <div className={classes.SkillsBar}>
                                <SkillSet type={"dp"} content={"Design Patterns"} bar={true} />
                                <SkillSet type={"git"} content={"Git & Github"} bar={true} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className={classes.Statistics}>
                    <h1>Status</h1>
                    <div className={classes.StatisticsBox}>
                        {statistics.map((el, i) => (
                            <div className={classes.StatisticsItem} key={i}>
                                <ion-icon name={el.icon}></ion-icon>
                                <p>
                                    <span>{el.amount}+ </span>
                                    {el.text}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className={classes.Projects}>
                    <h1>Projects</h1>
                    <div className={classes.ProjectsBox}>
                        <ProjectSet
                            image={omnifood}
                            tag={"webdesign"}
                            content={"Landing page for Omnifood"}
                            link={"https://hwpomnifood.netlify.app"}
                        />
                        <ProjectSet
                            image={natours}
                            tag={"webdesign"}
                            content={"Landing page for Natours"}
                            link={"https://hwpnatours.netlify.app"}
                        />
                        <ProjectSet
                            image={nexter}
                            tag={"webdesign"}
                            content={"Landing page for Nexter"}
                            link={"https://hwpnexter.netlify.app"}
                        />
                        <ProjectSet
                            image={piggame}
                            tag={"javascript"}
                            content={"Pig Game"}
                            link={"https://hwppiggame.netlify.app"}
                        />
                        <ProjectSet
                            image={tictactoe}
                            tag={"javascript"}
                            content={"TicTacToe Game"}
                            link={"https://hwptictactoe.netlify.app"}
                        />
                        <ProjectSet
                            image={budgety}
                            tag={"javascript"}
                            content={"Budget Management App"}
                            link={"https://hwpbudgety.netlify.app"}
                        />
                        <ProjectSet
                            image={forkify}
                            tag={"javascript"}
                            content={"Forkify"}
                            link={"https://hwpforkify.netlify.app"}
                        />
                        <ProjectSet
                            image={splashy}
                            tag={"javascript"}
                            content={"Splashy - Unplash Clone"}
                            link={"https://hwpsplashy.netlify.app"}
                        />
                        <ProjectSet
                            image={covid}
                            tag={"javascript"}
                            content={"Covid19 Tracker"}
                            link={"https://covid19trackersite.netlify.app"}
                        />
                        <ProjectSet
                            image={burger}
                            tag={"react"}
                            content={"BurgerBuilder"}
                            link={"https://burgerbuilder-413b0.web.app"}
                        />
                        <ProjectSet
                            image={photify}
                            tag={"react"}
                            content={"Photify - Dynamic Grid Photoes"}
                            link={"https://photify.web.app"}
                        />
                        <ProjectSet
                            image={hwp}
                            tag={"react"}
                            content={"Htut Wai Phyoe - Portfolio"}
                            link={"https://htutwaiphyoe.netlify.app/"}
                        />
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Portfolio;
