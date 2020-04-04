import React from "react";
import { BrowserRouter as Router, Route} from "react-router-dom";
import Navbar from "./components/Nav/Nav";
import Contact from "./pages/ContactPage/ContactPage";
import Inspire from "./pages/InspirationPage/InspirationPage";
import Landing from "./pages/LandingPage/LandingPage";
import MeetingAdd from "./pages/MeetingCreate/MeetingCreate";
import MeetingsPage from "./pages/MeetingPage/MeetingsPage";
import Other from "./pages/OtherGroups/OtherGroups";
import Profile from "./pages/ProfilePage/ProfilePage";
// import "bootstrap/dist/css/bootstrap.min.css";


import "./App.css";


function App() {
  return (
    <Router>
      <main className="container">
        <Navbar/>
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