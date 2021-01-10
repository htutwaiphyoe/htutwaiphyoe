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

    useEffect(() => {
        window.scrollTo({ top: 0 });
    });

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
    let component = (
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
    if (error) {
        return <MessageBox message={error.message} />;
    }
    if (fullBlog) {
        component = (
            <section className={classes.FullBlog}>
                <h2>{fullBlog.title}</h2>
                <div className={classes.Time}>
                    <p>#{fullBlog.tag}</p>
                    <p>{fullBlog.createdAt}</p>
                    <p>{fullBlog.readTime} mins to read</p>
                </div>
                <div className={classes.Image}>
                    <div
                    // style={{
                    //     backgroundImage: `url('${fullBlog.coverImageURL}')`,
                    //     backgroundSize: "cover",
                    //     backgroundPosition: "center center",
                    // }}
                    >
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
