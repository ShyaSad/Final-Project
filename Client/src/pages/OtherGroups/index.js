import React from "react";
import "./OtherGroups.css";
import ResourceCards from "../../components/ResourceCards";
import {Container} from "reactstrap";

// import "./OtherGroups.css"
const OtherGroups = () => {
  const meetings = [{ "title": "  SF and Marin County AA Online Meetings", "url": "https://aasfmarin.org/online-meetings" },
  { "title": "NorCal AA Virtual Meeting List", "url": "https://docs.google.com/document/d/10_TGZaw7TNxu5Fhqma5lby4vSZtOzkkFAvc-jhLTdWg/edit" },
  { "title": "Washington DC AA Online Meetings", "url": "https://docs.google.com/spreadsheets/d/1SZPZ5jLyZ--bIiYzPeCxnBb_NVljBMdNNLC7CUHo-Is/edit?fbclid=IwAR1UYbxGy4grNtG5pmsUZeZiKi5C96snQxUoIo66VqZ7R4_uPtG0dhsHqOE#gid=0" },
  { "title": "Online Int'l AA Meeting Directory", "url": "https://docs.google.com/spreadsheets/d/1FotwE5g0AX0edZ29XyJfLF9U0WVn7_OYECfRtn1hV1U/htmlview#gid=0" },
  { "title": "London AA Online Meetings", "url": "https://docs.google.com/spreadsheets/d/1__2L5DsLbE7Ud3WtNWTfMGAUmiqTJPpmxkVHNfrBt-4/edit?pli=#gid=1626846791" },
  { "title": "Scotland AA Online Meetings", "url": "https://docs.google.com/spreadsheets/d/1GaSdvGSAfALwO3MvDLh4hjbRV6qGqyySytE_fN5rT6U/edit#gid=0" },
  { "title": "Paris AA Online Meetings in English", "url": "https://docs.google.com/spreadsheets/u/0/d/1PXiG3WAni-jKhWHUsgUXrQBtXqChRyKXMwKMYI3uHkY/htmlview?fbclid=IwAR2iWxAJUVdyhAnYYsl40vNP9dNMpfv6RsKx6Ji5PyokmZ1XpT-0S1PG_HY#gid=0" },
  { "title": "AA Intergroup Online Meetings", "url": "https://aa-intergroup.org" },
  { "title": "AA Grapevine - All 2020 issues free online!", "url": "https://www.aagrapevine.org/we-are-here-to-help" },
  { "title": "In The Rooms (Online Recovery Meetings)", "url": "https://www.intherooms.com/home/" },
  { "title": "Lion Rock Online AA & Support Groups", "url": "https://www.lionrockrecovery.com/online-aa-meetings-and-support-groups" },
  { "title": "Facebook Recovery Meetings (must request to join)", "url": "https://www.facebook.com/groups/780975548972631/" },
  { "title": "LA Meetings on Facebook", "url": "https://www.facebook.com/groups/445194612919196/" },
  { "title": "AA London - 7 Hours Ahead of PST", "url": "https://alcoholicsanonymouslondon.com/" },
  { "title": "Tel Aviv Virtual AA - 9 Hours Ahead of PST", "url": "https://tikvatlv.wordpress.com/" },
  { "title": "Jerusalem Virtual AA - 9 Hours Ahead of PST", "url": "https://docs.google.com/spreadsheets/d/1IlLeNKp-VnQsyzO9pxqTkyM2RNnu2uD_fBw4IK13V6Q/htmlview" },]
  const groupResourceCards = meetings.map(meeting => <ResourceCards title={meeting.title} url={meeting.url}/>)  ;
  return (
    <React.Fragment>
      {/* <Example /> */}
      <Container>
        
        {groupResourceCards}

          <div className="position">
          </div>
          
       
      </Container>
    </React.Fragment>
  )
}
export default OtherGroups;

