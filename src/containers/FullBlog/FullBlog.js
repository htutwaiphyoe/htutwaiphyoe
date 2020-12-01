import React, { useState, useEffect } from "react";
import Skeleton from "@material-ui/lab/Skeleton";
import axios from "axios";

import NavigationList from "../../components/NavigationList/NavigationList";
import classes from "./FullBlog.module.css";
const FullBlog = (props) => {
    const [blog, setBlog] = useState(null);

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
    let component = null;
    // let component = (
    //     <div className={classes.FullBlog}>
    //         <Skeleton variant="text" animation="wave" width="80%" />
    //         <div className={classes.Time}>
    //             <Skeleton variant="text" width="20%" animation="wave" />
    //             <Skeleton variant="text" width="20%" animation="wave" />
    //             <Skeleton variant="text" width="20%" animation="wave" />
    //         </div>
    //         <div className={classes.Image}>
    //             <figure>
    //                 <Skeleton variant="rect" width="100%" height={500} animation="wave" />
    //             </figure>
    //         </div>
    //         <Skeleton variant="text" animation="wave" />
    //         <Skeleton variant="text" animation="wave" />
    //         <Skeleton variant="text" animation="wave" />
    //     </div>
    // );
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
                <p className={classes.Body}>{blog.body}</p>
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
