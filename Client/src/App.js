import React from "react";
import { BrowserRouter as Router, Route} from "react-router-dom";
import Navbar from "./components/Navbar";
import Contact from "./Pages/ContactPage";
import Inspire from "./Pages/InspirationPage";
import Landing from "./Pages/LandingPage";
import MeetingAdd from "./Pages/MeetingCreate";
import MeetingsPage from "./Pages/MeetingsPage";
import Other from "./Pages/OtherGroups";
import Profile from "./Pages/ProfilePage";
import "./App.css";

function App() {
  return (
    <Router>
      <Navbar/>
      <main className="container">
        <Route exact path="/" component={()=><Landing username='someone'/>} />
        <Route exact path="/contactpage" component={Contact} />
        <Route exact path="/dailyinspirations" component={Inspire} />
        <Route exact path="/meetingcreation" component={MeetingAdd} />
        <Route exact path='/meetings' component={()=><MeetingsPage username='someone'/>}/>
        <Route exact path="/othergroups" component={Other} />
        <Route exact path="/profilepage" component={Profile} />
      </main>
    </Router>
  );
}

export default App;