// API Key: 8d2d0e850282c8badeccfd692fa4da14
// URL: https://financialmodelingprep.com/api/v3/financial-statement-symbol-lists?apikey=8d2d0e850282c8badeccfd692fa4da14

import React from "react"
import "./App.css"
// ROUTE
import {Route, Switch} from "react-router-dom"
// PAGES
import About from "./pages/About"
import Main from "./pages/Main"
import Stock from "./pages/Stock"
import Stocks from "./pages/Stocks"
// COMPONENTS
import Nav from "./components/Nav"

function App() {
  return (
    <div className="App">
      <Nav/>
      <Switch>
        <Route exact path="/">
          <Main/>
        </Route>
        <Route path="/about">
          <About/>
        </Route>
        <Route 
        path="/stocks/:symbol"
        render={(routerProps) => <Stock {...routerProps}/>}/>
        <Route path="/stocks">
          <Stocks/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
