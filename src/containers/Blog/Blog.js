import React from "react";
import NavigationList from "../../components/NavigationList/NavigationList";

import img from "../../assets/imgs/js2.png";
import img2 from "../../assets/imgs/basic.jpg";
import classes from "./Blog.module.css";
const Blog = (props) => {
    const date = new Date();
    return (
        <React.Fragment>
            <NavigationList />
            <div className={classes.Blog}>
                <div className={classes.BlogItem}>
                    <figure
                        className={classes.ItemImage}
                        style={{
                            backgroundImage: `url('${img}')`,
                            backgroundSize: "cover",
                            backgroundPosition: "center center",
                        }}
                    >
                        <img
                            src={
                                "https://images.unsplash.com/photo-1593642532009-6ba71e22f468?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxNzcyNzN8MHwxfGFsbHx8fHx8fHx8&ixlib=rb-1.2.1&q=80&w=1080"
                            }
                            alt="o"
                        />
                    </figure>

                    <div className={classes.ItemText}>
                        <p className={classes.tag}>#javascript</p>
                        <p>
                            JavaScript သိုင်းကျမ်း အပိုင်း(၂) - Binary Floating-Point Representation
                        </p>
                        <p>
                            {date.toDateString()}
                            {"6 mins to read"}
                        </p>
                    </div>
                </div>
                <div className={classes.BlogItem}>
                    <figure
                        className={classes.ItemImage}
                        style={{
                            backgroundImage: `url('https://images.unsplash.com/photo-1520583457224-aee11bad5112?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjIyfHxwcm9ncmFtbWluZ3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60')`,
                            backgroundSize: "cover",
                            backgroundPosition: "center center",
                        }}
                    >
                        <img
                            src={
                                "https://images.unsplash.com/photo-1593642532009-6ba71e22f468?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxNzcyNzN8MHwxfGFsbHx8fHx8fHx8&ixlib=rb-1.2.1&q=80&w=1080"
                            }
                            alt="o"
                        />
                    </figure>

                    <div className={classes.ItemText}>
                        <p className={classes.tag}>#javascript</p>
                        <p>
                            JavaScript သိုင်းကျမ်း အပိုင်း(၂) - Binary Floating-Point Representation
                        </p>
                        <p>
                            {date.toDateString()}
                            {"6 mins to read"}
                        </p>
                    </div>
                </div>
                <div className={classes.BlogItem}>
                    <figure
                        className={classes.ItemImage}
                        style={{
                            backgroundImage: `url('https://images.unsplash.com/photo-1520583457224-aee11bad5112?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjIyfHxwcm9ncmFtbWluZ3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60')`,
                            backgroundSize: "cover",
                            backgroundPosition: "center center",
                        }}
                    >
                        <img
                            src={
                                "https://images.unsplash.com/photo-1593642532009-6ba71e22f468?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxNzcyNzN8MHwxfGFsbHx8fHx8fHx8&ixlib=rb-1.2.1&q=80&w=1080"
                            }
                            alt="o"
                        />
                    </figure>

                    <div className={classes.ItemText}>
                        <p className={classes.tag}>#javascript</p>
                        <p>
                            JavaScript သိုင်းကျမ်း အပိုင်း(၂) - Binary Floating-Point Representation
                        </p>
                        <p>
                            {date.toDateString()}
                            {"6 mins to read"}
                        </p>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Blog;
