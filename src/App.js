import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Catalog from "./containers/Catalog/Catalog";

export default function App() {
    return (
        <Router>
            <div id="header">
                <nav>
                    <p>
                        <Link to="/">Home</Link>
                    </p>
                    <p>
                        <Link to="/books/page/1">Books</Link>
                    </p>
                    <p>
                        <Link to="/books/">Something other</Link>
                    </p>
                </nav>

                <Switch>
                    <Route path="/books/page/:id" >
                        <Catalog />
                    </Route>
                    <Route path="/books/page/:id" >
                        <Catalog />
                    </Route>
                    <Route path="/">
                        <Catalog />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}