import React from "react";
import { BrowserRouter as Router, Route} from "react-router-dom";
import Contact from "./Pages/ContactPage/ContactPage";
import Inspire from "./Pages/InspirationPage/InspirationPage";
import Landing from "./Pages/LandingPage/LandingPage";
import MeetingAdd from "./Pages/MeetingCreate/MeetingCreate";
import MeetingsPage from "./Pages/MeetingPage/MeetingsPage";

import Other from "./Pages/OtherGroups/OtherGroups";
import Profile from "./Pages/ProfilePage/ProfilePage";
// import "bootstrap/dist/css/bootstrap.min.css";


import "./App.css";


function App() {
  return (
    <Router>
      <main className="container">
        <Route exact path="/" component={()=><Landing username='someone'/>} />
        <Route exact path="/contactpage" component={Contact} />
        <Route exact path="/inspire" component={Inspire} />
        <Route exact path="/meetingcreation" component={MeetingAdd} />
        <Route exact path='/meetings' component={()=><MeetingsPage username='someone'/>}/>
        <Route exact path="/othergroups" component={Other} />
        <Route exact path="/profilepage" component={Profile} />
      </main>
    </Router>
  );
}

export default App;
