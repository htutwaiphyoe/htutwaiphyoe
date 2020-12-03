import React, { useState, useEffect } from "react";
import Skeleton from "@material-ui/lab/Skeleton";
import axios from "axios";

import NavigationList from "../../components/NavigationList/NavigationList";
import classes from "./FullBlog.module.css";
const FullBlog = (props) => {
    const [blog, setBlog] = useState(null);
    window.scrollTo(0, 0);
    useEffect(() => {
        let timer;
        axios
            .get(`https://portfolio-80db9.firebaseio.com/blogs/${props.match.params.id}.json`)
            .then((res) => {
                console.log(res.data);

                timer = setTimeout(() => {
                    setBlog(res.data);
                }, 500);
            });
        return () => {
            clearTimeout(timer);
        };
    }, [props.match.params.id]);
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
                <figure>
                    <Skeleton
                        variant="rect"
                        width="100%"
                        height={500}
                        animation="wave"
                        style={{ backgroundColor: "#2C2E2F" }}
                    />
                </figure>
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
    if (blog) {
        component = (
            <div className={classes.FullBlog}>
                <h2>{blog.title}</h2>
                <div className={classes.Time}>
                    <p>#{blog.topic}</p>
                    <p>{blog.date}</p>
                    <p>{blog.duration} mins to read</p>
                </div>
                <div className={classes.Image}>
                    <figure
                        style={{
                            backgroundImage: `url('${blog.coverImageURL}')`,
                            backgroundSize: "cover",
                            backgroundPosition: "center center",
                        }}
                    >
                        <img src={blog.coverImageURL} alt={blog.title} />
                    </figure>
                </div>
                <div className={classes.Body}>
                    {blog.body.map((b, i) => {
                        if (b.type === "code") {
                            return (
                                <div className={classes.Code} key={i}>
                                    <pre>{b.body}</pre>
                                </div>
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
