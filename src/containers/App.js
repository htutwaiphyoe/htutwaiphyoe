import React, { Suspense } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Layout from "./Layout/Layout";
import Loader from "../components/UI/Loader/Loader";
import "./App.css";
// const Home = React.lazy(() => {
//     return Promise.all([
//         import("./Home/Home"),
//         new Promise((resolve) => setTimeout(resolve, 1000)),
//     ]).then(([moduleExports]) => moduleExports);
// });
const Home = React.lazy(() => {
    return new Promise((resolve) => {
        setTimeout(() => resolve(import("./Home/Home")), 1500);
    });
});
const Blog = React.lazy(() => {
    return new Promise((resolve) => {
        setTimeout(() => resolve(import("./Blog/Blog")), 1500);
    });
});
const FullBlog = React.lazy(() => {
    return new Promise((resolve) => {
        setTimeout(() => resolve(import("./FullBlog/FullBlog")), 1500);
    });
});
const Contact = React.lazy(() => {
    return new Promise((resolve) => {
        setTimeout(() => resolve(import("./Contact/Contact")), 1500);
    });
});
const About = React.lazy(() => {
    return new Promise((resolve) => {
        setTimeout(() => resolve(import("./About/About")), 1500);
    });
});
const Portfolio = React.lazy(() => {
    return new Promise((resolve) => {
        setTimeout(() => resolve(import("./Portfolio/Portfolio")), 1500);
    });
});
// const Home = React.lazy(() => import("./Home/Home"));
// const Blog = React.lazy(() => import("./Blog/Blog"));
// const FullBlog = React.lazy(() => import("./FullBlog/FullBlog"));
// const Contact = React.lazy(() => import("./Contact/Contact"));
// const About = React.lazy(() => import("./About/About"));
// const Portfolio = React.lazy(() => import("./Portfolio/Portfolio"));

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
