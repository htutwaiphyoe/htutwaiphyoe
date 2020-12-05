import React, { Suspense } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Layout from "./Layout/Layout";
import Loader from "../components/UI/Loader/Loader";
import "./App.css";

const Home = React.lazy(() => {
    return new Promise((resolve) => {
        setTimeout(() => resolve(import("./Home/Home")), 1000);
    });
});
const Blog = React.lazy(() => {
    return new Promise((resolve) => {
        setTimeout(() => resolve(import("./Blog/Blog")), 1000);
    });
});
const FullBlog = React.lazy(() => {
    return new Promise((resolve) => {
        setTimeout(() => resolve(import("./FullBlog/FullBlog")), 1000);
    });
});
const Contact = React.lazy(() => {
    return new Promise((resolve) => {
        setTimeout(() => resolve(import("./Contact/Contact")), 1000);
    });
});
const About = React.lazy(() => {
    return new Promise((resolve) => {
        setTimeout(() => resolve(import("./About/About")), 1000);
    });
});
const Portfolio = React.lazy(() => {
    return new Promise((resolve) => {
        setTimeout(() => resolve(import("./Portfolio/Portfolio")), 1000);
    });
});

const MessageBox = React.lazy(() => {
    return new Promise((resolve) => {
        setTimeout(() => resolve(import("../components/UI/MessageBox/MessageBox")), 1000);
    });
});

const App = (props) => {
    return (
        <BrowserRouter>
            <Layout>
                <Suspense fallback={<Loader />}>
                    <Switch>
                        <Route path="/" exact component={Home} />
                        <Route path="/blogs" exact component={Blog} />
                        <Route path="/blogs/:id" exact component={FullBlog} />
                        <Route path="/about" exact component={About} />
                        <Route path="/contact" exact component={Contact} />
                        <Route path="/portfolio" exact component={Portfolio} />
                        <Route render={() => <MessageBox message="404" />} />
                    </Switch>
                </Suspense>
            </Layout>
        </BrowserRouter>
    );
};

export default App;
