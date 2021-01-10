import React from "react";
import { useHistory } from "react-router-dom";

import classes from "./BlogItem.module.css";
const BlogItem = (props) => {
    let { createdAt } = props.blog;
    createdAt = new Date(createdAt).toLocaleString("en-us", {
        day: "numeric",
        month: "long",
        year: "numeric",
    });

    const history = useHistory();
    const onClickHandler = (id) => {
        history.push(`/blogs/${id}`);
    };
    return (
        <div
            className={classes.BlogItem}
            key={props.blog.id}
            onClick={onClickHandler.bind(this, props.blog.id)}
        >
            <div className={classes.ItemImage}>
                <img src={`${props.blog.imageCover}`} alt={`${props.blog.title}`} />
            </div>

            <div className={classes.ItemText}>
                <p className={classes.tag}>#{props.blog.tag}</p>
                <div className={classes.time}>
                    <p>{createdAt}</p>
                    <p>{props.blog.readTime} mins to read</p>
                </div>

                <p>{props.blog.title}</p>
            </div>
        </div>
    );
};

export default BlogItem;
