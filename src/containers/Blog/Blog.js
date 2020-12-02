import React, { useEffect, useState } from "react";
import Skeleton from "@material-ui/lab/Skeleton";
import axios from "axios";
import NavigationList from "../../components/NavigationList/NavigationList";

import classes from "./Blog.module.css";
const Blog = (props) => {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        window.scrollTo(0, 0);
        setLoading(true);
        let timer;
        axios.get("https://portfolio-80db9.firebaseio.com/blogs.json").then((res) => {
            let data = [];
            for (let i in res.data) {
                data.unshift({ id: i, ...res.data[i] });
            }
            setBlogs(data);
            timer = setTimeout(() => {
                setLoading(false);
            }, 500);
        });
        return () => {
            clearTimeout(timer);
        };
    }, []);
    const onClickHandler = (id) => {
        props.history.push(`/blogs/${id}`);
    };
    let components = null;
    if (loading) {
        components = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }, { id: 6 }].map(
            (blog) => (
                <div className={classes.BlogItem} key={blog.id}>
                    <figure className={classes.ItemImage}>
                        <Skeleton
                            variant="rect"
                            width="100%"
                            height={200}
                            animation="wave"
                            style={{ backgroundColor: "#2C2E2F" }}
                        />
                    </figure>

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
    } else {
        components = blogs.map((blog) => (
            <div
                className={classes.BlogItem}
                key={blog.id}
                onClick={onClickHandler.bind(this, blog.id)}
            >
                <figure
                    className={classes.ItemImage}
                    style={{
                        backgroundImage: `url('${blog.coverImageURL}')`,
                        backgroundSize: "cover",
                        backgroundPosition: "center center",
                    }}
                >
                    <img src={`${blog.coverImageURL}`} alt={`${blog.title}`} />
                </figure>

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
