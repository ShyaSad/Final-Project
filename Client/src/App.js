import React from "react";
import { BrowserRouter as Router, Route} from "react-router-dom";
import Navbar from "./components/Navbar";
import Contact from "./pages/ContactPage";
import Inspire from "./pages/InspirationPage";
import Landing from "./pages/LandingPage";
import MeetingAdd from "./pages/MeetingCreate";
import MeetingsPage from "./pages/MeetingsPage";
import Other from "./pages/OtherGroups";
import Profile from "./pages/ProfilePage";
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