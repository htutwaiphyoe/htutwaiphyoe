import React, { useState, useEffect } from "react";
import classes from "./SkillSet.module.css";

const skillsSet = {
    db: 55,
    ds: 40,
    dp: 40,
    git: 65,
    design: 78,
    js: 71,
    react: 65,
    node: 63,
};

const SkillSet = (props) => {
    const [percentage, setPercentage] = useState(0);
    useEffect(() => {
        let timer;
        if (percentage < skillsSet[props.type]) {
            timer = setTimeout(() => {
                setPercentage((prevPercentage) => prevPercentage + 1);
            }, 50);
        }
        return () => {
            clearTimeout(timer);
        };
    }, [percentage, props.type]);
    if (props.bar) {
        return (
            <div className={classes.SkillsSetBar}>
                <label>{props.content}</label>
                <div className={classes.OutterBar}>
                    <div className={classes.InnerBar} style={{ width: `${percentage}%` }}></div>
                </div>
            </div>
        );
    }
    return (
        <div className={classes.SkillsSet}>
            <div className={classes.SkillsSetCircle}>
                <svg>
                    <circle cx="95" cy="95" r="90"></circle>
                    <circle
                        cx="95"
                        cy="95"
                        r="90"
                        style={{
                            strokeDashoffset: `calc(570 - 570 * ${percentage} / 100)`,
                        }}
                    ></circle>
                </svg>
                <div className={classes.Percentage}>{percentage}%</div>
            </div>
            <div className={classes.SkillsSetIcon}>{props.content}</div>
        </div>
    );
};

export default SkillSet;
