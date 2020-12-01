import React, { Suspense } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Layout from "./Layout/Layout";
import "./App.css";
const Home = React.lazy(() => import("./Home/Home"));
const Blog = React.lazy(() => import("./Blog/Blog"));
const FullBlog = React.lazy(() => import("./FullBlog/FullBlog"));

const App = (props) => {
    return (
        <BrowserRouter>
            <Layout>
                <Switch>
                    <Suspense fallback={null}>
                        <Route path="/" exact component={Home} />
                        <Route path="/blogs" exact component={Blog} />
                        <Route path="/blogs/:id" exact component={FullBlog} />
                        <Route path="/about" exact component={Home} />
                        <Route path="/contact" exact component={Home} />
                        <Route path="/portfolio" exact component={Home} />
                    </Suspense>
                </Switch>
            </Layout>
        </BrowserRouter>
    );
};

export default App;
