import React, { Component } from "react";
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Navbar from './components/Nav';
import Landing from  './pages/Landing';
import Contact from "./pages/ContactPage"
import Inspire from "./pages/InspirationPage"
import Landing from "./pages/LandingPage"
import Meetings from './pages/Meetings';
import MeetingAdd from "./pages/MeetingCreate"
import Other from "./pages/otherGroups"
import Profile from "./pages/profilePage"
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";


function App() {
  return (
    <Router>
      <main className="container">
        <Route exact path="/" component={()=><Landing username='someone'/>} />
        <Route exact path="/contactpage" component={Contact} />
        <Route exact path="/inspire" component={Inspire} />
        <Route exact path="/meetingcreation" component={MeetingAdd} />
        <Route exact path='/meetings' component={()=><Meetings username='someone'/>}/>
        <Route exact path="/othergroups" component={Other} />
        <Route exact path="/profilepage" component={Profile} />
      </main>
    </Router>
  );
}

export default App;
