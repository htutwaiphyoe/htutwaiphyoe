import React, { useEffect } from "react";
import Skeleton from "@material-ui/lab/Skeleton";
import { useSelector, useDispatch } from "react-redux";

import NavigationList from "../../components/NavigationList/NavigationList";
import * as actionCreators from "../../store/actions";
import MessageBox from "../../components/UI/MessageBox/MessageBox";
import classes from "./FullBlog.module.css";
const FullBlog = (props) => {
    const fullBlog = useSelector((state) => state.blogs.fullBlog);
    const blogs = useSelector((state) => state.blogs.blogs);
    const error = useSelector((state) => state.ui.error);
    const dispatch = useDispatch();

    window.scrollTo(0, 0);

    useEffect(() => {
        if (blogs.length === 0) {
            dispatch(actionCreators.fetchBlog(props.match.params.id));
        } else {
            const blog = blogs.find((b) => b.id === props.match.params.id);
            if (blog) {
                dispatch(actionCreators.loadFullBlog(blog));
            }
        }
        return () => {
            dispatch(actionCreators.clearFullBlog());
        };
    }, [props.match.params.id, dispatch, blogs]);

    let component = (
        <div className={classes.FullBlog}>
            <Skeleton
                variant="text"
                animation="wave"
                width="80%"
                style={{ backgroundColor: "#2C2E2F" }}
                height={40}
            />
            <Skeleton
                variant="text"
                animation="wave"
                width="60%"
                style={{ backgroundColor: "#2C2E2F" }}
                height={40}
            />
            <div className={classes.Time}>
                <Skeleton
                    variant="text"
                    width="20%"
                    animation="wave"
                    height={30}
                    style={{ backgroundColor: "#2C2E2F" }}
                />
                <Skeleton
                    variant="text"
                    width="20%"
                    animation="wave"
                    height={30}
                    style={{ marginLeft: "10px", backgroundColor: "#2C2E2F" }}
                />
                <Skeleton
                    variant="text"
                    width="20%"
                    animation="wave"
                    height={30}
                    style={{ marginLeft: "10px", backgroundColor: "#2C2E2F" }}
                />
            </div>
            <div className={classes.Image}>
                <div>
                    <Skeleton
                        variant="rect"
                        width="100%"
                        height={500}
                        animation="wave"
                        style={{ backgroundColor: "#2C2E2F" }}
                    />
                </div>
            </div>
            <div className={classes.Body} style={{ backgroundColor: "#242526" }}>
                <Skeleton
                    variant="text"
                    animation="wave"
                    width="30%"
                    height={20}
                    style={{ backgroundColor: "#2C2E2F", marginBottom: "10px" }}
                />
                <Skeleton
                    variant="text"
                    animation="wave"
                    style={{ backgroundColor: "#2C2E2F", marginBottom: "10px" }}
                    height={20}
                />
                <Skeleton
                    variant="text"
                    animation="wave"
                    style={{ backgroundColor: "#2C2E2F", marginBottom: "10px" }}
                    height={20}
                />
                <Skeleton
                    variant="text"
                    animation="wave"
                    style={{ backgroundColor: "#2C2E2F", marginBottom: "10px" }}
                    height={20}
                />
            </div>
        </div>
    );
    if (error) {
        return (
            <React.Fragment>
                <NavigationList />
                <MessageBox message={error.message} />
            </React.Fragment>
        );
    }
    if (fullBlog) {
        component = (
            <div className={classes.FullBlog}>
                <h2>{fullBlog.title}</h2>
                <div className={classes.Time}>
                    <p>#{fullBlog.topic}</p>
                    <p>{fullBlog.date}</p>
                    <p>{fullBlog.duration} mins to read</p>
                </div>
                <div className={classes.Image}>
                    <div
                        style={{
                            backgroundImage: `url('${fullBlog.coverImageURL}')`,
                            backgroundSize: "cover",
                            backgroundPosition: "center center",
                        }}
                    >
                        <img src={fullBlog.coverImageURL} alt={fullBlog.title} />
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
                            return <h3 className={classes.Heading}>{b.body}</h3>;
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
            </div>
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
