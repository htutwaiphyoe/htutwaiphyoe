import React, { Suspense } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Layout from "./Layout/Layout";
import "./App.css";
const Home = React.lazy(() => import("./Home/Home"));

const App = (props) => {
    return (
        <BrowserRouter>
            <Layout>
                <Suspense fallback={null}>
                    <Switch>
                        <Route path="/" exact component={Home} />
                    </Switch>
                </Suspense>
            </Layout>
        </BrowserRouter>
    );
};

export default App;
