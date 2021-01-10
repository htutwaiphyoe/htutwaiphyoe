import React, { Suspense } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Layout from "./Layout/Layout";
import "./App.css";

const Home = React.lazy(() => {
    return new Promise((resolve) => {
        setTimeout(() => resolve(import("./Home/Home")), 0);
    });
});
const Blog = React.lazy(() => {
    return new Promise((resolve) => {
        setTimeout(() => resolve(import("./Blog/Blog")), 0);
    });
});
const FullBlog = React.lazy(() => {
    return new Promise((resolve) => {
        setTimeout(() => resolve(import("./FullBlog/FullBlog")), 0);
    });
});
const Contact = React.lazy(() => {
    return new Promise((resolve) => {
        setTimeout(() => resolve(import("./Contact/Contact")), 0);
    });
});
const About = React.lazy(() => {
    return new Promise((resolve) => {
        setTimeout(() => resolve(import("./About/About")), 0);
    });
});
const Portfolio = React.lazy(() => {
    return new Promise((resolve) => {
        setTimeout(() => resolve(import("./Portfolio/Portfolio")), 0);
    });
});

const MessageBox = React.lazy(() => {
    return new Promise((resolve) => {
        setTimeout(() => resolve(import("../components/UI/MessageBox/MessageBox")), 0);
    });
});

const App = (props) => {
    return (
        <BrowserRouter>
            <Layout>
                <Suspense fallback={null}>
                    <Switch>
                        <Route path="/" exact component={Home} />
                        <Route path="/blogs" exact component={Blog} />
                        <Route path="/blogs/:slug" exact component={FullBlog} />
                        <Route path="/about" exact component={About} />
                        <Route path="/contact" exact component={Contact} />
                        <Route path="/portfolio" exact component={Portfolio} />
                        <Route render={() => <MessageBox message="404 Page not found ⚠" />} />
                    </Switch>
                </Suspense>
            </Layout>
        </BrowserRouter>
    );
};

export default App;
