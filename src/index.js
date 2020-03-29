


import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import BrowserRouter from 'react-router-dom/BrowserRouter'
import { Route, Switch } from "react-router-dom";

import "assets/scss/material-kit-react.scss?v=1.8.0";

// pages for this product
import LandingPage from "views/LandingPage/LandingPage.js";
import StatisticsPage from "views/StatisticsPage/StatisticsPage.js";
import HowToStake from "views/HowToGuide/HowTo.js";
import AboutPage from "views/About/About.js";




const reload = () => window.location.reload();



var hist = createBrowserHistory();

ReactDOM.render(
	
  <BrowserRouter basename="/" history={hist}>
  
    <Switch>
      <Route path="/ThePassiveTrust.json" onEnter={reload} />
      <Route path="/statistics" component={StatisticsPage} />
      <Route path="/how-to-stake" component={HowToStake} />
      <Route path="/about" component={AboutPage} />
      <Route exact path="/" component={LandingPage} />
    </Switch>
     
  </BrowserRouter>
 ,

  document.getElementById("root")
);
