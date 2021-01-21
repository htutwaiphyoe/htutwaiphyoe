import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import NavigationList from "../../components/NavigationList/NavigationList";
import * as actionCreators from "../../store/actions";
import MessageBox from "../../components/UI/MessageBox/MessageBox";
import { beautifyDate } from "../../utils/utils";
import FullBlogLoader from "./FullBlogLoader";
import classes from "./FullBlog.module.css";
const FullBlog = (props) => {
    const fullBlog = useSelector((state) => state.blogs.fullBlog);
    const blogs = useSelector((state) => state.blogs.blogs);
    const error = useSelector((state) => state.ui.error);
    const dispatch = useDispatch();

    useEffect(() => {
        window.scrollTo({ top: 0 });
        return () => {
            dispatch(actionCreators.clearError());
        };
    }, [dispatch]);

    useEffect(() => {
        if (blogs.length === 0) {
            dispatch(actionCreators.fetchBlog(props.match.params.slug));
        } else {
            const blog = blogs.find((b) => b.slug === props.match.params.slug);
            if (blog) {
                dispatch(actionCreators.loadFullBlog(blog));
            }
        }
        return () => {
            dispatch(actionCreators.clearFullBlog());
        };
    }, [props.match.params.slug, dispatch, blogs]);
    useEffect(() => {
        if (fullBlog) {
            document.title = fullBlog.title + " | Htut Wai Phyoe";
        }
    }, [fullBlog]);
    let component = <FullBlogLoader />;
    if (error) {
        return <MessageBox message={error.message} />;
    }
    if (fullBlog) {
        component = (
            <section className={classes.FullBlog}>
                <h2>{fullBlog.title}</h2>
                <div className={classes.Time}>
                    <p>#{fullBlog.tag}</p>
                    <p>{beautifyDate(fullBlog.createdAt)}</p>
                    <p>{fullBlog.readTime} mins to read</p>
                </div>
                <div className={classes.Image}>
                    <div>
                        <img src={fullBlog.imageCover} alt={fullBlog.title} />
                    </div>
                </div>
                <div className={classes.Body}>
                    {fullBlog.body.map((b, i) => {
                        if (b.type === "code") {
                            return (
                                <div className={classes.Code} key={i}>
                                    <pre>{b.body}</pre>
                                </div>
                            );
                        }
                        if (b.type === "heading") {
                            return (
                                <h3 className={classes.Heading} key={i}>
                                    {b.body}
                                </h3>
                            );
                        }
                        if (b.type === "link") {
                            return (
                                <a
                                    href={b.body}
                                    alt={b.body}
                                    target="_blank"
                                    rel="noreferrer"
                                    className={classes.Link}
                                    key={i}
                                >
                                    {b.body}
                                </a>
                            );
                        }
                        if (b.type === "image") {
                            return (
                                <img
                                    src={b.body}
                                    alt="Example Code"
                                    className={classes.Img}
                                    key={i}
                                />
                            );
                        }
                        return (
                            <p className={classes.Text} key={i}>
                                {b.body}
                            </p>
                        );
                    })}
                </div>
            </section>
        );
    }
    return (
        <React.Fragment>
            <NavigationList />
            {component}
        </React.Fragment>
    );
};

export default FullBlog;
