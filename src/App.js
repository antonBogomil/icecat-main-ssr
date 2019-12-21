import React from 'react';
import Home from "./client/pages/Home";
import {Route, Switch} from "react-router-dom";

const App = () => {
    return (
        <Switch>
            <Route exact path="/" render={Home}/>
            <Route path="/product" render={() => (<div>Product page</div>)}/>
        </Switch>

    );
};

export default App;