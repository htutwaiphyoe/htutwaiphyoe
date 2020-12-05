import React, { Suspense } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Layout from "./Layout/Layout";
import Loader from "../components/UI/Loader/Loader";
import "./App.css";

const Home = React.lazy(() => {
    return new Promise((resolve) => {
        setTimeout(() => resolve(import("./Home/Home")), 1100);
    });
});
const Blog = React.lazy(() => {
    return new Promise((resolve) => {
        setTimeout(() => resolve(import("./Blog/Blog")), 1100);
    });
});
const FullBlog = React.lazy(() => {
    return new Promise((resolve) => {
        setTimeout(() => resolve(import("./FullBlog/FullBlog")), 1100);
    });
});
const Contact = React.lazy(() => {
    return new Promise((resolve) => {
        setTimeout(() => resolve(import("./Contact/Contact")), 1100);
    });
});
const About = React.lazy(() => {
    return new Promise((resolve) => {
        setTimeout(() => resolve(import("./About/About")), 1100);
    });
});
const Portfolio = React.lazy(() => {
    return new Promise((resolve) => {
        setTimeout(() => resolve(import("./Portfolio/Portfolio")), 1100);
    });
});

const App = (props) => {
    return (
        <BrowserRouter>
            <Layout>
                <Switch>
                    <Suspense fallback={<Loader />}>
                        <Route path="/" exact component={Home} />
                        <Route path="/blogs" exact component={Blog} />
                        <Route path="/blogs/:id" exact component={FullBlog} />
                        <Route path="/about" exact component={About} />
                        <Route path="/contact" exact component={Contact} />
                        <Route path="/portfolio" exact component={Portfolio} />
                    </Suspense>
                </Switch>
            </Layout>
        </BrowserRouter>
    );
};

export default App;
