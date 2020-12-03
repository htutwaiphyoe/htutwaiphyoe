import React, { useEffect } from "react";
import Skeleton from "@material-ui/lab/Skeleton";

import { useSelector, useDispatch } from "react-redux";

import NavigationList from "../../components/NavigationList/NavigationList";
import * as actionCreators from "../../store/actions";
import classes from "./Blog.module.css";
const Blog = (props) => {
    const blogs = useSelector((state) => state.blogs.blogs);
    const dispatch = useDispatch();

    // window.scrollTo(0, 0);
    useEffect(() => {
        if (blogs.length === 0) {
            dispatch(actionCreators.fetchBlogs());
        }
    }, [blogs.length, dispatch]);
    const onClickHandler = (id) => {
        props.history.push(`/blogs/${id}`);
    };

    let components = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }, { id: 6 }].map(
        (blog) => (
            <div className={classes.BlogItem} key={blog.id}>
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
                    <Skeleton
                        variant="text"
                        animation="wave"
                        style={{ backgroundColor: "#2C2E2F" }}
                    />
                    <Skeleton
                        variant="text"
                        animation="wave"
                        style={{ backgroundColor: "#2C2E2F" }}
                    />
                </div>
            </div>
        )
    );

    if (blogs.length > 0) {
        components = blogs.map((blog) => (
            <div
                className={classes.BlogItem}
                key={blog.id}
                onClick={onClickHandler.bind(this, blog.id)}
            >
                <div
                    className={classes.ItemImage}
                    style={{
                        backgroundImage: `url('${blog.coverImageURL}')`,
                        backgroundSize: "cover",
                        backgroundPosition: "center center",
                    }}
                >
                    <img src={`${blog.coverImageURL}`} alt={`${blog.title}`} />
                </div>

                <div className={classes.ItemText}>
                    <p className={classes.tag}>#{blog.topic}</p>
                    <div className={classes.time}>
                        <p>{blog.date}</p>
                        <p>{blog.duration} mins to read</p>
                    </div>

                    <p>{blog.title}</p>
                </div>
            </div>
        ));
    }

    return (
        <React.Fragment>
            <NavigationList />
            <div className={classes.Blog}>{components}</div>
        </React.Fragment>
    );
};

export default Blog;
