import React from "react";
import { BrowserRouter as Router, Route} from "react-router-dom";
import { Container } from 'reactstrap';

import Navbar from "./components/Navbar";
import Contact from "./pages/ContactPage";
import Inspire from "./pages/InspirationPage";
import Landing from "./pages/LandingPage";
import MeetingAdd from "./pages/MeetingCreate";
import MeetingsPage from "./pages/MeetingsPage";
import Other from "./pages/OtherGroups";
import Profile from "./pages/ProfilePage";
import Login from "./pages/LoginPage";
import SignUp from "./pages/SignupPage";

import "./App.css";

function App() {
  return (
    <Router>
      <Navbar/>
      <Container>
        <Route exact path="/" component={()=><Landing username='someone'/>} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/dailyinspirations" component={Inspire} />
        <Route exact path="/meetingcreation" component={MeetingAdd} />
        <Route exact path='/meetings' component={()=><MeetingsPage username='someone'/>}/>
        <Route exact path="/othergroups" component={Other} />
        <Route exact path="/profilepage" component={Profile} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={SignUp} />

      </Container>
    </Router>
  );
}

export default App;