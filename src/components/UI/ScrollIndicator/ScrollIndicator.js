import React, { useEffect, useRef } from "react";

import classes from "./ScrollIndicator.module.scss";
const ScrollIndicator = (props) => {
    const indicatorRef = useRef();
    const handleScrollIndicator = () => {
        if (indicatorRef.current) {
            const maxHeight = document.body.scrollHeight - window.innerHeight;
            const indicatorWidth = (window.scrollY / maxHeight) * 100;
            indicatorRef.current.style.width = `${indicatorWidth}%`;
        }
    };
    useEffect(() => {
        window.addEventListener("scroll", handleScrollIndicator);
        return () => {
            window.removeEventListener("scroll", handleScrollIndicator);
        };
    }, []);
    return <div className={classes.ScrollIndicator} ref={indicatorRef}></div>;
};

export default ScrollIndicator;
