import React, { useEffect } from "react";
import Skeleton from "@material-ui/lab/Skeleton";

import { useSelector, useDispatch } from "react-redux";

import NavigationList from "../../components/NavigationList/NavigationList";
import * as actionCreators from "../../store/actions";
import MessageBox from "../../components/UI/MessageBox/MessageBox";
import BlogItem from "../../components/BlogItem/BlogItem";
import classes from "./Blog.module.css";
const Blog = (props) => {
    const blogs = useSelector((state) => state.blogs.blogs);
    const error = useSelector((state) => state.ui.error);
    const dispatch = useDispatch();

    useEffect(() => {
        window.scrollTo({ top: 0 });
    });
    useEffect(() => {
        if (blogs.length === 0) {
            dispatch(actionCreators.fetchBlogs());
        }
    }, [blogs.length, dispatch]);

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
    if (error) {
        return <MessageBox message={error.message} />;
    }
    if (blogs.length > 0) {
        components = blogs.map((blog) => <BlogItem blog={blog} key={blog.id} />);
    }

    return (
        <React.Fragment>
            <NavigationList />
            <section className={classes.Blog}>{components}</section>
        </React.Fragment>
    );
};

export default Blog;
