import React from "react";

import Skeleton from "@material-ui/lab/Skeleton";
import classes from "./FullBlog.module.css";
const FullBlogLoader = (props) => {
    let skeletons = {
        heading: [
            { variant: "text", animation: "wave", width: "80%", color: "#2C2E2F", height: 40 },
            { variant: "text", animation: "wave", width: "60%", color: "#2C2E2F", height: 40 },
        ],
        time: [
            {
                variant: "text",
                animation: "wave",
                width: "20%",
                color: "#2C2E2F",
                height: 30,
                marginLeft: "0",
            },
            {
                variant: "text",
                animation: "wave",
                width: "20%",
                color: "#2C2E2F",
                height: 30,
                marginLeft: "10px",
            },
            {
                variant: "text",
                animation: "wave",
                width: "20%",
                color: "#2C2E2F",
                height: 30,
                marginLeft: "10px",
            },
            {
                variant: "text",
                animation: "wave",
                width: "20%",
                color: "#2C2E2F",
                height: 30,
                marginLeft: "10px",
            },
        ],
        body: [
            {
                variant: "text",
                animation: "wave",
                width: "30%",
                color: "#2C2E2F",
                height: 20,
                marginBottom: "10px",
            },
            {
                variant: "text",
                animation: "wave",
                width: "100%",
                color: "#2C2E2F",
                height: 20,
                marginBottom: "10px",
            },
            {
                variant: "text",
                animation: "wave",
                width: "100%",
                color: "#2C2E2F",
                height: 20,
                marginBottom: "10px",
            },
            {
                variant: "text",
                animation: "wave",
                width: "100%",
                color: "#2C2E2F",
                height: 20,
                marginBottom: "10px",
            },
        ],
    };
    return (
        <section className={classes.FullBlog}>
            {skeletons.heading.map((el, i) => (
                <Skeleton
                    variant={el.variant}
                    animation={el.animation}
                    width={el.width}
                    style={{ backgroundColor: `${el.color}` }}
                    height={el.height}
                    key={i}
                />
            ))}
            <div className={classes.Time}>
                {skeletons.time.map((el, i) => (
                    <Skeleton
                        variant={el.variant}
                        width={el.width}
                        animation={el.animation}
                        height={el.height}
                        style={{ backgroundColor: `${el.color}`, marginLeft: `${el.marginLeft}` }}
                        key={i}
                    />
                ))}
            </div>
            <div className={classes.Image}>
                <Skeleton
                    variant="rect"
                    width="100%"
                    height={500}
                    animation="wave"
                    style={{ backgroundColor: "#2C2E2F" }}
                />
            </div>
            <div className={classes.Body} style={{ backgroundColor: "#242526" }}>
                {skeletons.body.map((el, i) => (
                    <Skeleton
                        variant={el.variant}
                        width={el.width}
                        animation={el.animation}
                        height={el.height}
                        style={{
                            backgroundColor: `${el.color}`,
                            marginBottom: `${el.marginBottom}`,
                        }}
                        key={i}
                    />
                ))}
            </div>
        </section>
    );
};

export default FullBlogLoader;
