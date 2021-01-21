import React, { Suspense } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";


import Layout from "./Layout/Layout";
import "./App.css";

const Home = React.lazy(() => import("./Home/Home"));
const Blog = React.lazy(() => import("./Blog/Blog"));
const FullBlog = React.lazy(() => import("./FullBlog/FullBlog"));
const Contact = React.lazy(() => import("./Contact/Contact"));
const About = React.lazy(() => import("./About/About"));
const Portfolio = React.lazy(() => import("./Portfolio/Portfolio"));
const MessageBox = React.lazy(() => import("../components/UI/MessageBox/MessageBox"));

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
