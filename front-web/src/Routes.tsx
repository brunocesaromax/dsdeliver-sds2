import { BrowserRouter } from "react-router-dom";
import { Route, Switch } from "react-router"
import Orders from "./Orders";
import Home from "./Home";
import Navbar from "./Navbar";

function Routes() {
    return (
        <BrowserRouter>
            <Navbar/>
            <Switch>
                <Route path="/orders">
                    <Orders/>
                </Route>
                <Route path="/">
                    <Home/>
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;
