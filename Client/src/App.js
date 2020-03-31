import React, { Component } from "react";
import { BrowserRoute as Router, Route} from "react-router-dom"
import Contact from "./Pages/ContactPage"
import Inspire from "./Pages/InspirationPage"
import Landing from "./Pages/LandingPage"
import MeetingAdd from "./Pages/MeetingCreate"
import Meeting from "./Pages/MeetingsPage"
import Other from "./Pages/otherGroups"
import Profile from "./Pages/profilePage"
import "./App.css";


function App() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Landing} />
        <Route exact path="/contactpage" component={Contact} />
        <Route exact path="/inspire" component={Inspire} />
        <Route exact path="/meetingreation" component={MeetingAdd} />
        <Route exact path="/meetingpage" component={Meeting} />
        <Route exact path="/othergroups" component={Other} />
        <Route exact path="/profilepage" component={Profile} />
      </div>
    </Router>
  );
}


export default App;
