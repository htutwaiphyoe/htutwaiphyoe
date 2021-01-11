import React from "react";
import Skeleton from "@material-ui/lab/Skeleton";
import classes from "./BlogItem.module.css";

const BlogLoader = (props) => {
    return (
        <div className={classes.BlogItem}>
            <div className={classes.ItemImage}>
                <Skeleton
                    variant="rect"
                    width="100%"
                    height={200}
                    animation="wave"
                    style={{ backgroundColor: "#2C2E2F" }}
                />
            </div>

            <div className={classes.ItemText}>
                <Skeleton
                    variant="text"
                    width="30%"
                    animation="wave"
                    style={{ backgroundColor: "#2C2E2F" }}
                />

                <div className={classes.time}>
                    <Skeleton
                        variant="text"
                        width="20%"
                        animation="wave"
                        style={{ backgroundColor: "#2C2E2F" }}
                    />
                    <Skeleton
                        variant="text"
                        width="20%"
                        animation="wave"
                        style={{ backgroundColor: "#2C2E2F" }}
                    />
                </div>
                <Skeleton variant="text" animation="wave" style={{ backgroundColor: "#2C2E2F" }} />
                <Skeleton variant="text" animation="wave" style={{ backgroundColor: "#2C2E2F" }} />
            </div>
        </div>
    );
};

export default BlogLoader;
