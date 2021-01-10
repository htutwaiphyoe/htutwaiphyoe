import React from "react";
import { useHistory } from "react-router-dom";

import { beautifyDate } from "../../utils/utils";
import classes from "./BlogItem.module.css";
const BlogItem = (props) => {
    const history = useHistory();
    const onClickHandler = (slug) => {
        history.push(`/blogs/${slug}`);
    };
    return (
        <div
            className={classes.BlogItem}
            key={props.blog.id}
            onClick={onClickHandler.bind(this, props.blog.slug)}
        >
            <div className={classes.ItemImage}>
                <img src={`${props.blog.imageCover}`} alt={`${props.blog.title}`} />
            </div>

            <div className={classes.ItemText}>
                <p className={classes.tag}>#{props.blog.tag}</p>
                <div className={classes.time}>
                    <p>{beautifyDate(props.blog.createdAt)}</p>
                    <p>{props.blog.readTime} mins to read</p>
                </div>

                <p>{props.blog.title}</p>
            </div>
        </div>
    );
};

export default BlogItem;
