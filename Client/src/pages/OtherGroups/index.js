import React from "react";
import "./OtherGroups.css";
import ResourceCards from "../../components/ResourceCards";
// import {Container} from "reactstrap";

// import "./OtherGroups.css"
const OtherGroups = () => {
  const meetings = [{ "title": "  SF and Marin County AA Online Meetings", "description": "Serving San Francisco and Marin Do you think you have a problem with alcohol? Do you want to stop drinking, but find you cannot quit entirely or have little control over the amount you drink?", "url": "https://aasfmarin.org/online-meetings" },
  { "title": "NorCal AA Virtual Meeting List", "description": "A Guide to virtual meetings all throughout Northern California" ,"url": "https://docs.google.com/document/d/10_TGZaw7TNxu5Fhqma5lby4vSZtOzkkFAvc-jhLTdWg/edit" },
  { "title": "Washington DC AA Online Meetings", "description": "Online Meetings available in Washington DC", "url": "https://docs.google.com/spreadsheets/d/1SZPZ5jLyZ--bIiYzPeCxnBb_NVljBMdNNLC7CUHo-Is/edit?fbclid=IwAR1UYbxGy4grNtG5pmsUZeZiKi5C96snQxUoIo66VqZ7R4_uPtG0dhsHqOE#gid=0" },
  { "title": "Online Int'l AA Meeting Directory", "description": "Directory for Online International Meetings", "url": "https://docs.google.com/spreadsheets/d/1FotwE5g0AX0edZ29XyJfLF9U0WVn7_OYECfRtn1hV1U/htmlview#gid=0" },
  { "title": "London AA Online Meetings", "description": "Listings for Online AA Meetings throughout London", "url": "https://docs.google.com/spreadsheets/d/1__2L5DsLbE7Ud3WtNWTfMGAUmiqTJPpmxkVHNfrBt-4/edit?pli=#gid=1626846791" },
  { "title": "Scotland AA Online Meetings", "description": "Online Virtual AA Meetings all over Scotland", "url": "https://docs.google.com/spreadsheets/d/1GaSdvGSAfALwO3MvDLh4hjbRV6qGqyySytE_fN5rT6U/edit#gid=0" },
  { "title": "Paris AA Online Meetings in English", "description": "Find Online AA Meetings for English speakers in Paris", "url": "https://docs.google.com/spreadsheets/u/0/d/1PXiG3WAni-jKhWHUsgUXrQBtXqChRyKXMwKMYI3uHkY/htmlview?fbclid=IwAR2iWxAJUVdyhAnYYsl40vNP9dNMpfv6RsKx6Ji5PyokmZ1XpT-0S1PG_HY#gid=0" },
  { "title": "AA Intergroup Online Meetings", "description": "Intergroup meetings AA members worldwide are available now to help. Fast, confidential. ", "url": "https://aa-intergroup.org" },
  { "title": "AA Grapevine", "description": "The International Journal for Alcoholics Anonymous - All 2020 issues free online!", "url": "https://www.aagrapevine.org/we-are-here-to-help" },
  { "title": "In The Rooms (Online Recovery Meetings)", "description": "Through live meetings, discussion groups, and all the other tools In the Rooms has to offer, people from around the world connect with one another and help each other along their recovery journeys." , "url": "https://www.intherooms.com/home/" },
  { "title": "Lion Rock Online AA & Support Groups", "description": "We’ve been there. We understand drinking and drug problems and what to do about them. Let’s talk about what’s going on with you.", "url": "https://www.lionrockrecovery.com/online-aa-meetings-and-support-groups" },
  { "title": "Facebook Recovery Meetings (must request to join)", "description": "A Private Group to help you on your journey", "url": "https://www.facebook.com/groups/780975548972631/" },
  { "title": "LA Meetings on Facebook", "description": "Meetings available in the Los Angeles Area", "url": "https://www.facebook.com/groups/445194612919196/" },
  { "title": "AA London - 7 Hours Ahead of PST", "description": "Holistic guide to virtual and in-person meetings in London", "url": "https://alcoholicsanonymouslondon.com/" },
  { "title": "Tel Aviv Virtual AA - 9 Hours Ahead of PST", "description": "Virtual Meetings in Tel Aviv", "url": "https://tikvatlv.wordpress.com/" },
  { "title": "Jerusalem Virtual AA - 9 Hours Ahead of PST", "description": "A listing of available meetings in Jerusalem", "url": "https://docs.google.com/spreadsheets/d/1IlLeNKp-VnQsyzO9pxqTkyM2RNnu2uD_fBw4IK13V6Q/htmlview" },]
  const groupResourceCards = meetings.map(meeting => <ResourceCards title={meeting.title} description={meeting.description} url={meeting.url}/>)  ;
  return (
    <React.Fragment>
      {/* <Example /> */}
      {/* <Container> */}
        
        {groupResourceCards}

          <div className="position">
          </div>
          
       
      {/* </Container> */}
    </React.Fragment>
  )
}
export default OtherGroups;

