import React from "react";
import { BrowserRouter as Router, Route} from "react-router-dom";
import Contact from "./Pages/ContactPage/ContactPage";
import Inspire from "./Pages/InspirationPage/InspirationPage";
import Landing from "./Pages/LandingPage/LandingPage";
import MeetingAdd from "./Pages/MeetingCreate/MeetingCreate";
import Meeting from "./Pages/MeetingPage/MeetingsPage";
import Other from "./Pages/OtherGroups/OtherGroups";
import Profile from "./Pages/ProfilePage/ProfilePage";
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