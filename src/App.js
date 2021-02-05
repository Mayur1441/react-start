import {BrowserRouter as Router, Switch, Route, useRouteMatch} from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';

import AppHeader from "./header/header";
import AppLanding from "./landing/landing";
import AppFooter from "./footer/footer";
import Article from "./article/article";
import AppCategory from "./category/category"
import NewArticle from "./new-article/newarticle"

import './index.css'

function App() {
    return (
        <Router>
            <div>
                <Switch>
                    <Route path="/create">
                        <CreateArticle/>
                    </Route>
                    <Route path="/article">
                        <ArticleFunction/>
                    </Route>
                    <Route path="/category">
                        <CategoryFunction/>
                    </Route>
                    <Route path="/">
                        <Home/>
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

function Home() {
    return (
        <div>
            <AppHeader></AppHeader>
            <AppLanding></AppLanding>
            <AppFooter></AppFooter>
        </div>
    )
}

function ArticleFunction() {
    let match = useRouteMatch();
    return (
        <div>
            <Switch>
                <Route path={`${match.path}/:articleSlug`}>
                    <Article/>
                </Route>
            </Switch>
        </div>
    );
}

function CategoryFunction() {
    let match = useRouteMatch();
    return (
        <div>
            <Switch>
                <Route path={`${match.path}/:categorySlug`}>
                    <AppCategory/>
                </Route>
            </Switch>
        </div>
    );
}

function CreateArticle() {
    return (
        <NewArticle/>
    )
}

export default App;
