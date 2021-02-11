import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Catalog from "./containers/Catalog/Catalog";

export default function App() {
    const RouterStyle = {
        display: "flex",
        justifyContent: "space-around",
    }

    const RouterItem = {
        width: "100%",
        textAlign: "center",
        padding: "10px",
        backgroundColor: "#616161",
        borderLeft: "1px solid white",
        borderRight: "1px solid white",
    }

    return (
        <Router>
            <div id="header">
                <nav style={RouterStyle}>
                    <Link style={RouterItem} to="/">Home</Link>
                    <Link style={RouterItem} to="/books/page/1">Books</Link>
                    <Link style={RouterItem} to="/books/">Something other</Link>
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